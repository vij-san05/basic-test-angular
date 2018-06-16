import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChange event when upvoted', () => {
    let totalVote = null;

    component.voteChanged.subscribe(tv => totalVote = tv);
    component.upVote();
    expect(totalVote).toBe(1);
  });
});