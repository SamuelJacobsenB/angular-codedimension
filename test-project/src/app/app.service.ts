import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  createEmail(name: string, surname: string): string {
    const surnameParts: string[] = surname.split('');
    const email: string = `${name}${surnameParts[0]}${surnameParts.length}@gmail.company.com`;

    return email;
  }
}
