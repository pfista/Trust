# Trust (aka Wufi)
A p2p reputation currency system

### The general goal: 
  
  * to allow users to contextually rate the actions of other users, on or offline, by boosting/nixing a user's "social capital" (for now, let's call it Wufi Power)
  * to allow users to see any other user's general or contextual "social capital" from their own perspective on the network (for now, let's call it Wufi score)
  * to allow users to use their Wufi Power to spend/earn a currency onto anyone, even complete strangers (for now, let's call it Wufi)

### Stated features:

  * collusion-resistant: you cannot receive Wufi for stuff from users you have not directly or indirectly boosted/nixed;
  * inflation-resistant: you can only earn as much Wufi as you have boosted and spend only as much as you have been boosted;
  * sybil attack-resistant: boosting any user's Wufi Power only gives that user a higher proportion of your total boosted amount (unlike Facebook 'likes' or Twitter 'retweets' and other spammable voting systems); this means giving a user trillions of Wufi only devalues the social capital of everyone else you have previously boosted
  * ????: while your reputation within a context may be negative, the worst Wufi Score you can have is 0

### Future (desired) plans/features:

  * 
  * Incorporation with some federated social networking platform (probably pump.io or Trsst) for public sharing of boosts/nixs and contextual hashtags
  * 

###### Some terms: (* = yet to be finalized)

  * Wufi Power*: the net sum of all ratings you have received (amount of boosted Wufi minus amount of nixed Wufi)
  * Wufi Score*: the net proportional sum of ratings of you from the perspective of any user
  * boosting* : the action of raising a user's Wufi Power
  * nixing*: the action of lowering a user's Wufi Power
