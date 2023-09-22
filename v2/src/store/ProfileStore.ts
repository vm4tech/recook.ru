import {CommonStore} from "./CommonStore";
import autoObservable from "./autoObservable";
import {AXIOS, SERVER_URL} from "../actions/config";

const PROFILE_URL = SERVER_URL+"/profile";
export class ProfileStore extends CommonStore {
    email: string = "default";
    username: string = "user";
    password?: string;
    name?: string;
    avatar?: string;
    constructor() {
        super();
        autoObservable(this);
    }

    getProfile = async () => {
        this.setLoading(true);
        return await AXIOS.get(PROFILE_URL+"/")
            .then(res => {
                this.setProfile(res.data);
                this.setLoading(false);
            })
            .catch(e => {
                this.setError(e);
                this.setLoading(false);
                throw e;
            })
    }

    setProfile = (profile: ProfileStore) => {
        this.name = profile.name;
        this.username = profile.username;
        this.email = profile.email;
        this.avatar = profile.avatar;
    }
}