import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let comp :VoteComponent;
  beforeEach(() => {
    comp = new VoteComponent();
   });  

  it('should increment the totalvote when upvote ', () => {
    comp.upVote();
    expect(comp.totalVotes).toBe(1); 
   });

  it('should decrement the totalvote when downVote', () => {
    comp.downVote();
    expect(comp.totalVotes).toBe(-1); 
   });
});