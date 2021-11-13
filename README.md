# Lab 8 - Starter
I would fit my automated tests <b>within a Github action that runs whenever code
is pushed.<b> I would use custom tests to test my code locally for whatever I am
currently working on and automated tests are usually more general and to ensure
code won't break. The words <i>manual<i> and <i>automated<i> contradict each other
so it only makes sense to not have the automated tests be performed everytime I 
locally test <i>before<i> pushing. I'd run automated tests upon pushing because 
sometimes, I may decide to not extensively test something, thinking that something
I changed wouldn't cause an issue but by having an automated test run everytime 
something is pushed, this ensures that bugs would be caught 99% of the time. Also,
developers most often test manually before pushing anything at all so this automated
check would be a last pass to ensure everything is good.