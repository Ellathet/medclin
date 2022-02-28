export default interface IHashService {
  encrypt(string: string): Promise<string>;
  verify(hash: string, string: string): Promise<boolean>;
}
