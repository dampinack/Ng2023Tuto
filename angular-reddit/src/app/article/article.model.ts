
// This is The Model (the article):
export class Article {

  title: string;
  link: string;
  votes: number;

  // The votes? means that is Optional!, default=0
  constructor(title: string, link: string, votes?: number) {

    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }


  domain(): string {
    try {

      const domainAndPath: string = this.link.split('//')[1];

      return domainAndPath.split('/')[0];

    } catch (err) {
      return '0';
    }
  }

}
