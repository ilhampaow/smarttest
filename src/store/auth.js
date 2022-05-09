import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useAuth = defineStore('auth-store', () => {
  const user = ref(null);

  const register = async function(credentials){
    try{
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/register', credentials);
      authenticated.value = true;
      getUser();
    } catch (err){
      user.value = null;
      console.error('Error loading new arrivals', err);
      return err;
    }
  };

  const getUser = async function(){
    try{
      const response = await axios.get('/api/user');
      const result = await response;
      user.value = response.data;
      // console.log(user.value);
      return user.value;
    } catch (err){
      console.error('Error loading new arrivals : ',err);
      return err;
    }
  };

  const login = async function(credentials){
    try{
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/login', credentials);
      // authenticated.value = true;
      getUser();
    }
    catch {
      // authenticated.value = false;
      user.value = null;
      console.error('Error loading new arrivals : ',err);
      return err;
    }
  };

  const logout = async function (){
    try{
      await axis.post('/logout');
      user.value= null;
    } catch {
      console.error('Error landing new arrivals', err);
      return err;
    }
  };

  return {
    user, register, login, getUser, logout,
  };
});