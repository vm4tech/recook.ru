// TODO: пересмотреть Profile -> в USER
export default interface Profile extends OldNewPassword {
  id: number;
  username: string;
  name?: string;
  email: string;
}

interface OldNewPassword {
  newPassword?: string;
  oldPassword?: string;
}
