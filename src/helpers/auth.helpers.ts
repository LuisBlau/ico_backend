import * as crypto from "crypto";
import * as ethSigUtil from 'eth-sig-util';
import * as ethjsutil from 'ethereumjs-util';

export const randomNonce = () => {
    return crypto.randomBytes(32).toString("hex");
};

export const verifySig = ( signedData: string,wallet: string, signChallenge: string) => {
    let signerWallet = ethSigUtil.recoverPersonalSignature({
        data: ethjsutil.bufferToHex(Buffer.from(signChallenge, 'utf8')),
        sig: signedData
    })
    if (signerWallet === wallet) {
        return true;
    }
    return false;
}