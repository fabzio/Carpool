(function(_){for(var r in _){_[r].__farm_resource_pot__='index_e3a6.js';(globalThis || window || global)['0f6266587c3c880ed98055938bafcf5c'].__farm_module_system__.register(r,_[r])}})({"61128824":function t(t,r,a,e){t._m(r),a("7db16566"),a("b889a890");var s=a("84a68c6c"),o=a("28724cd6");r.default=class{static async createPassenger(t){try{var r=await s.http.post("passenger",t);if(!r.success)throw Error(r.message);return r.data;}catch(t){throw Error(t.message);}}static async updatePassenger(t){console.log(t);}static async getPassengerByCode(t){var r=o.getCookie("tkn");try{var a=await s.http.get("passenger/user/".concat(t),{Authorization:"Bearer ".concat(r)});if(!a.success)throw Error(a.message);return a.data;}catch(t){throw Error();}}static async newRequest(t){var r=o.getCookie("tkn");try{var a=await s.http.post("passenger/new-request",t,{Authorization:"Bearer ".concat(r)});if(!a.success)throw Error(a.message);return a.data;}catch(t){throw Error(t.message);}}static async joinRequest(t){var r=o.getCookie("tkn");try{var a=await s.http.post("passenger/join-request",{travelId:t},{Authorization:"Bearer ".concat(r)});if(!a.success)throw Error(a.message);return a.data;}catch(t){throw Error(t.message);}}static async acceptOffer(t){var r=o.getCookie("tkn");try{var a=await s.http.post("passenger/accept-offer",{travelId:t},{Authorization:"Bearer ".concat(r)});if(!a.success)throw Error(a.message);return a.data;}catch(t){throw Error(t.message);}}static async travelHistory(t){var r=t.pageParam,a=o.getCookie("tkn");try{var e=await s.http.get("passenger/history?page=".concat(void 0===r?1:r),{Authorization:"Bearer ".concat(a)});if(!e.success)throw Error(e.message);return e.data;}catch(t){throw Error();}}static async modifyRequest(t){var r=o.getCookie("tkn");try{var a=await s.http.patch("passenger/modify-request",t,{Authorization:"Bearer ".concat(r)});if(!a.success)throw Error(a.message);}catch(t){throw Error(t.message);}}static async modifyJoinRequest(t){var r=o.getCookie("tkn");try{var a=await s.http.patch("passenger/modify-join",t,{Authorization:"Bearer ".concat(r)});if(!a.success)throw Error(a.message);}catch(t){throw Error();}}};},"6982241b":function r(r,t,a,e){r._m(t),a("7db16566"),a("b889a890");var o=a("84a68c6c"),c=a("28724cd6");t.default=class{static async createDriver(r){var t=c.getCookie("tkn");try{var a=await o.http.post("driver",r,{Authorization:"Bearer ".concat(t)});if(!a.success)throw Error(a.message);}catch(r){throw Error(r.message);}}static async updateDriver(r){console.log(r);}static async getDriverByCode(r){var t=c.getCookie("tkn");try{return(await o.http.get("driver/user/".concat(r),{Authorization:"Bearer ".concat(t)})).data;}catch(r){throw Error();}}static async newOffer(r){var t=c.getCookie("tkn");try{var a=await o.http.post("driver/new-offer",r,{Authorization:"Bearer ".concat(t)});if(!a.success)throw Error(a.message);return a.data;}catch(r){throw Error(r.message);}}static async takeTravelRequest(r){var t=c.getCookie("tkn");try{var a=await o.http.post("driver/take-request",r,{Authorization:"Bearer ".concat(t)});if(!a.success)throw Error(a.message);}catch(r){throw Error(r.message);}}static async modifyOffer(r){var t=c.getCookie("tkn");try{var a=await o.http.patch("driver/modify-offer",r,{Authorization:"Bearer ".concat(t)});if(!a.success)throw Error(a.message);}catch(r){throw Error(r.message);}}static async travelHistory(r){var t=r.pageParam,a=c.getCookie("tkn");try{return(await o.http.get("driver/history?page=".concat(void 0===t?1:t),{Authorization:"Bearer ".concat(a)})).data;}catch(r){throw Error();}}};},});
//# sourceMappingURL=index_e3a6.d4613d64.js.map