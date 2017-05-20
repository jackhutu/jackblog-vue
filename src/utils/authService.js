import Cookies from 'universal-cookie'
const cookies = new Cookies()
import { CookieDomain } from '../config.js'
let cookieConfig = {}
if(CookieDomain !== ''){
  cookieConfig = { domain: CookieDomain } //path:'/',maxAge:365*24*60*60
}

export function saveCookie(name,value) {
  cookies.set(name, value, cookieConfig)
  //window.localStorage.setItem(name,value)
}

export function getCookie(name) {
  return cookies.get(name)
  //return window.localStorage.getItem(name)
}

export function removeCookie(name) {
  cookies.remove(name, cookieConfig)
  //window.localStorage.removeItem(name)
}

export function signOut() {
  cookies.remove('token', cookieConfig)
  //window.localStorage.removeItem('token')
}

export function isLogin() {
  return !!cookies.get('token')
  //return !!window.localStorage.getItem('token')
}