import restClientService from "./rest-client.service";

const baseUrl = 'https://rails-7-base-api.onrender.com/api/v1/todos';

export const fetch = (status) => {
  return restClientService.get(baseUrl,{status: status});
};

export const update = (item, id) => {
    return restClientService.put(baseUrl, {params: {id}, data:{name: item}});
};

// export const assign$ = function (channelType, settingId, groupLevel, { agents, teams }) {
//   const url = buildUrl(channelType, settingId, groupLevel) + '/assign';

//   return RxHttp.post$(url, { agents, teams }).pluck('data');
// };

// export const unassign$ = function (channelType, settingId, groupLevel, { agents, teams }) {
//   const url = buildUrl(channelType, settingId, groupLevel) + '/unassign';

//   return RxHttp.post$(url, { agents, teams }).pluck('data');
// };

// export const fetchCandidates$ = function (channelType, settingId, groupLevel) {
//   const url = buildUrl(channelType, settingId, groupLevel) + '/candidates';

//   return RxHttp.get$(url).pluck('data');
// };

export default {
  fetch,
  update
//   assign$,
//   unassign$,
//   fetchCandidates$,
};
