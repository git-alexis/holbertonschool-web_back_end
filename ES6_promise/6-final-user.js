import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName)
  const photo = uploadPhoto(fileName)

  const results = await Promise.allSettled([user, photo]);

  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason.toString(),
  }));
}
