export class AppCtorComponent {
    title: string;
    heroes: string[] = [];

    constructor(title: string, heroes: string[]) {
        this.title = title;
        this.heroes = heroes;
    }
}