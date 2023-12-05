import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


@Injectable()
export class PasswordHasherService {
    async hashPassword(password: string){
        return await bcrypt.hash(password, 10); 
    }

    async comparePassword(password: string, encryptedpass: string): Promise<boolean>{
        return await bcrypt.compare(password, encryptedpass);
    }
}
