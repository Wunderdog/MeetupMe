import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const fakeGroupId = '5b30768e09ed37faea985991';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    const { data } = await axios.get(this.path);

    return data.meetups;
  }
}

export {
  MeetupApi
};
