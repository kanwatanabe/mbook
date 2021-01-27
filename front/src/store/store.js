import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import router from '../routes/route'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({

   plugins: [createPersistedState({ // ストレージのキーを指定。デフォルトではvuex
     key: 'vuex',

     // 管理対象のステートを指定。pathsを書かない時は`modules`に書いたモジュールに含まれるステート全て。`[]`の時はどれも保存されない
    //  paths: [],

     // ストレージの種類を指定する。デフォルトではローカルストレージ
     storage: window.sessionStorage
   })],

    state:{
         headers: null,
         users: null,
    },

    getters: {
      //messageを使用するgetter
      user(state) {
        console.log(state.users)
        return state.users
      },
      header(state) {
        console.log(state.headers)
        return state.headers
      }
    },

    mutations:{

      signUp(state, payload) {
        console.log("ss")
        console.log(payload)

        state.headers = {
          "access-token": payload.headers["access-token"],
          "client": payload.headers["client"],
          "uid": payload.headers["uid"],
        };

        state.users = payload.data
      },

      signIn(state, payload) {
        console.log("ss")
        console.log(payload)

        state.headers = {
          "access-token": payload.headers["access-token"],
          "client": payload.headers["client"],
          "uid": payload.headers["uid"],
        };

        state.users = payload.data
      },

      signOut(state) {
        state.headers = null;
        state.users = null;
      },

      userSetting(state, payload) {
          console.log("ss")
          console.log(payload)

          state.headers = {
            "access-token": payload.headers["access-token"],
            "client": payload.headers["client"],
            "uid": payload.headers["uid"],
          };
          state.users = payload.data
          },

    },

    actions: {

        //paramsはemailなどのユーザー情報が入っていると思って下さい。
        signUp(context, params) {
          console.log("testt")
          console.log(params)

          axios.post('http://localhost:3000/v1/auth', params)
            .then(function (response) {
              //ここでレスポンスヘッダを受け取る。
              context.commit('signUp', response)
              router.push({
                name: "LoginHome"
              })
            })
            .catch(error => {
              console.log(error);
              console.log("ooo");
              alert("新規登録できませんでした")
              // console.log(alert_value);

            });
        },

        signIn(context, params) {
          console.log("testt")
          console.log(params)
                
                axios.post('http://localhost:3000/v1/auth/sign_in', params)
                    .then(function (response) {
                        //ここでレスポンスヘッダを受け取る。
                        context.commit('signIn', response)
                        router.push({name: "LoginHome"})
                    })
            },
        signOut(context) {

          console.log("test")
                
                    //ここでヘッダ情報を呼び出してDELETEリクエストに含める
                axios.delete('http://localhost:3000/v1/auth/sign_out', {
                        headers: context.state.headers
                    })
                    .then(function () {
                        context.commit('signOut');
                    })
            },

        userSetting(context, params) {
          axios.put('http://localhost:3000/v1/auth', params, {
              headers: context.state.headers
            })

            .then(response => {
              console.log(response);
              context.commit('userSetting', response)
              // router.push({name: "LoginHome"})
            })
            .catch(error => {
              console.log(error);
            });
        }

    },
})

export default store