import Vue from "vue";
import Vuex from "vuex";
import { ethers } from "ethers";
import LegoNFT from "../utils/LegoNFT.json";

Vue.use(Vuex);

const transformData = (nftData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

export default new Vuex.Store({
  state: {
    account: null,
    error: null,
    mining: false,
    legos: [],
    owner: false,
    notification: false,
    notification_msg: "",
    contract_address: "0x6A4664250f79e36BB556D64B36847957911178b0",
    opensea: "https://testnets.opensea.io/collection/lego-v3",
  },
  getters: {
    account: (state) => state.account,
    error: (state) => state.error,
    mining: (state) => state.mining,
    legos: (state) => state.legos,
    owner: (state) => state.owner,
    notification: (state) => state.notification,
    notification_msg: (state) => state.notification_msg,
  },
  mutations: {
    setAccount(state, account) {
      state.account = account;
    },
    setError(state, error) {
      state.error = error;
    },
    setMining(state, mining) {
      state.mining = mining;
    },
    setLegos(state, legos) {
      state.legos = legos;
    },
    setNotification(state, noti) {
      state.notification = noti;
    },
    setNotificationMsg(state, msg) {
      state.notification_msg = msg;
    },
    setOwner(state, owner) {
      state.owner = owner;
    },
  },
  actions: {
    async connect({ commit, dispatch }, connect) {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          commit("setError", "Metamask not installed!");
          return;
        }
        if (!(await dispatch("checkIfConnected")) && connect) {
          await dispatch("requestAccess");
        }
        await dispatch("checkNetwork");
        await dispatch("fetchOwner");
        // await dispatch("setupEventListeners");
      } catch (error) {
        console.log(error);
        commit("setError", "Account request refused.");
      }
    },
    async checkNetwork({ commit, dispatch }) {
      let chainId = await ethereum.request({ method: "eth_chainId" });
      const rinkebyChainId = "0x4";
      if (chainId !== rinkebyChainId) {
        if (!(await dispatch("switchNetwork"))) {
          commit(
            "setError",
            "You are not connected to the Rinkeby Test Network!"
          );
        }
      }
    },
    async switchNetwork() {
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x4" }],
        });
        return 1;
      } catch (switchError) {
        return 0;
      }
    },
    async checkIfConnected({ commit }) {
      const { ethereum } = window;
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        commit("setAccount", accounts[0]);
        return 1;
      } else {
        return 0;
      }
    },
    async requestAccess({ commit }) {
      const { ethereum } = window;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      commit("setAccount", accounts[0]);
    },
    async getContract({ state }) {
      try {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          state.contract_address,
          LegoNFT,
          signer
        );
        return connectedContract;
      } catch (error) {
        console.log(error);
        console.log("connected contract not found");
        return null;
      }
    },
    async setupEventListeners({ state, commit, dispatch }) {
      try {
        const connectedContract = await dispatch("getContract");
        if (!connectedContract) return;
        connectedContract.on("LegoMinted", async (from, tokenIds) => {
          console.log(
            `LegoMinted - sender: ${from} tokenIds: ${tokenIds.length}`
          );
          const legoNFTs = await connectedContract.walletOfOwner(state.account);
          console.log(legoNFTs);
          // commit("setLegos", transformData(legoNFTs));
          // alert(
          //   `Your NFT is all done -- see it here: https://testnets.opensea.io/assets/${
          //     state.contract_address
          //   }/${tokenId.toNumber()}`
          // );
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchOwner({ state, commit, dispatch }) {
      try {
        const connectedContract = await dispatch("getContract");
        const owner = await connectedContract.owner();
        if (state.account == owner) commit("setOwner", true);
      } catch (error) {
        console.log(error);
      }
    },
    async mintLegos({ commit, dispatch }, total) {
      try {
        const connectedContract = await dispatch("getContract");
        const mintTxn = await connectedContract.mint(total, {
          value: ethers.utils.parseEther("0.025"),
        });
        await mintTxn.wait();
      } catch (error) {
        console.log(error);
      }
    },
    async withdraw({ state, commit, dispatch }) {
      try {
        const connectedContract = await dispatch("getContract");
        if (state.owner) {
          const mintTxn = await connectedContract.withdraw();
          await mintTxn.wait();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
