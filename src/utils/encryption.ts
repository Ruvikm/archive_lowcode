import { Md5 } from 'ts-md5';

enum Md5EncryptionType{
  'LowerCase16' = 'LowerCase16',
  'UpperCase16' = 'UpperCase16',
  'LowerCase32' = 'LowerCase32',
  'UpperCase32' = 'UpperCase32'
}


/** md5加密 */ 
const Md5Encryption = (value: unknown,type: Md5EncryptionType)=>{
  const md5: any = new Md5();
  // value值
  md5.appendAsciiStr(value);
  // 加密后的值
  const md5pwd = md5.end(); 

  switch(type){
    case Md5EncryptionType.LowerCase16:
      return md5pwd.slice(8,24)
    case Md5EncryptionType.UpperCase16:
      return md5pwd.slice(8,24).toUpperCase()
    case Md5EncryptionType.LowerCase32:
      return md5pwd
    case Md5EncryptionType.UpperCase32:
      return md5pwd.toUpperCase()
    default: 
      return md5pwd
  }

}

export {
  Md5Encryption
}