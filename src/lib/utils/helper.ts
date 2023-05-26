// Import Modules
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';
import bcrypt from 'bcryptjs';
import dayjs from 'dayjs';

// Import Interfaces
import { TValidateRandomChar, TValidateString, TValidateTime } from '@interfaces/lib/utils';

// Import Constants
import { SERVICE_CRYPTO_ALGORITHM, SERVICE_CRYPTO_SECRET_KEY } from '@lib/constants';

export const validateString = (request: string, type: TValidateString): string => {
    if (!request) return '';

    switch (type) {
        case 'char':
            return request.replace(/[^a-z\d\s]+/gi, '');

        case 'numeric':
            return request.replace(/[^0-9]/g, '');

        case 'emoji':
            return request.replace(/\p{Extended_Pictographic}/gu, (m: any) => `[e-${m.codePointAt(0).toString(16)}]`);

        case 'encode':
            return Buffer.from(request).toString('base64');

        case 'decode':
            return Buffer.from(request, 'base64').toString('ascii');
    }
};

export const validateUpperCase = (request: string): string => {
    if (!request) return '';

    const splitRequest = request.split(' ');
    const result: string[] = [];

    splitRequest.forEach((value) => {
        result.push(value.charAt(0).toUpperCase() + value.slice(1));
    });

    return result.join(' ');
};

export const validateTime = (request: string | Date, type: TValidateTime, value?: number, unit?: dayjs.ManipulateType): string => {
    if (!dayjs(request).isValid()) return '';

    switch (type) {
        case 'date':
            return dayjs(request).format('YYYY-MM-DD');

        case 'date-time-1':
            return dayjs(request).format('YYYY-MM-DD HH:mm:ss');

        case 'date-time-2':
            return dayjs(request).format('YYYYMMDDHHmmss');

        case 'date-time-3':
            return dayjs(request).format('YYYYMMDD');

        case 'date-add':
            if (!value || !unit) return '';
            return dayjs(request).add(value, unit).format('YYYY-MM-DD');

        case 'date-time-add':
            if (!value || !unit) return '';
            return dayjs(request).add(value, unit).format('YYYY-MM-DD HH:mm:ss');

        case 'date-subs':
            if (!value || !unit) return '';
            return dayjs(request).subtract(value, unit).format('YYYY-MM-DD');

        case 'date-time-subs':
            if (!value || !unit) return '';
            return dayjs(request).subtract(value, unit).format('YYYY-MM-DD HH:mm:ss');
    }
};

export const validateRequestHp = (request: string): string => {
    if (!request) return '';

    const checkNumberHp = request.substring(0, 2);

    if (checkNumberHp === '62') {
        return request;
    }

    return request.replace(checkNumberHp, '628');
};

export const validateRandomChar = (request: number, type: TValidateRandomChar): string => {
    if (!request) return '';

    let characters = '';
    let charactersResult = '';

    switch (type) {
        case 'alpha':
            characters = 'qwertyuiopasdfghjklzxcvbnm';
            break;

        case 'numeric':
            characters = '1234567890';
            break;

        case 'alphanumeric':
            characters = '1234567890qwertyuiopasdfghjklzxcvbnm';
            break;
    }

    for (let index = 0; index < request; index++) {
        const random = Math.floor(Math.random() * characters.length);
        charactersResult += characters[random];
    }

    return charactersResult.toUpperCase();
};

export const validateEncrypt = (request: string): string => {
    const cryptoIv = Buffer.from(randomBytes(16)).toString('hex').substring(0, 16);
    const cipher = createCipheriv(SERVICE_CRYPTO_ALGORITHM, SERVICE_CRYPTO_SECRET_KEY, cryptoIv);
    const encrypted = Buffer.concat([cipher.update(request), cipher.final()]).toString('base64');
    const finalResult = Buffer.from(cryptoIv + ':' + encrypted).toString('base64');

    return finalResult;
};

export const validateDecrypt = (request: string): string | null => {
    const decodeRequest = Buffer.from(request, 'base64').toString('ascii');
    const splitRequest = decodeRequest.split(':');

    const cryptoIv = Buffer.from(splitRequest?.shift() || '', 'binary');
    const encryptedText = Buffer.from(splitRequest.join(':'), 'base64');
    const decipher = createDecipheriv(SERVICE_CRYPTO_ALGORITHM, SERVICE_CRYPTO_SECRET_KEY, cryptoIv);
    const finalResult = Buffer.concat([decipher.update(encryptedText), decipher.final()]).toString();

    return finalResult;
};

export const validateHash = async (request: string): Promise<string> => {
    return await bcrypt.hash(request, 10);
};

export const validateCompare = async (request: string, compare: string): Promise<Boolean> => {
    return await bcrypt.compare(request, compare);
};
