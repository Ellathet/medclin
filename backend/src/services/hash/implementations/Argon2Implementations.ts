import argon2 from 'argon2';
import IHashService from '../IHashService';

export default class Argon2Implementations implements IHashService {
  async encrypt(string: string): Promise<string> {
    const hash = await argon2.hash(string);

    return hash;
  }

  async verify(hash: string, string: string): Promise<boolean> {
    if (await argon2.verify(hash, string)) {
      return true;
    }
    return false;
  }
}
