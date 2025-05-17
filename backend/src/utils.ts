
import argon2 from "argon2";

export function hashPassword(raw: string){
  return argon2.hash(raw, {
    type: argon2.argon2id,
    memoryCost: 19456, // 19MB
    timeCost: 2,
    parallelism: 1,
  });
}


export function comparePassword(raw: string, hash: string) {
    return argon2.verify(hash, raw);
}