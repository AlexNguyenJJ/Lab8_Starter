# Lab 8 - Starter

Author: Alex Nguyen

## 1
I would fit my automated tests 
**within a Github action that runs whever code is pushed.** 
I would use custom tests to test my code locally for whatever I am currently 
working on and automated tests are usually more general and to ensure code won't
break. The words *manual* and *automated* contradict each other so it 
only makes sense to not have the automated tests be performed everytime I 
locally test *before* pushing. I'd run automated tests upon pushing because 
sometimes, I may decide to not extensively test something, thinking that something
I changed wouldn't cause an issue but by having an automated test run everytime 
something is pushed, this ensures that bugs would be caught 99% of the time. Also,
developers most often test manually before pushing anything at all so this automated
check would be a last pass to ensure everything is good.

## 2
I wouldn't because this case is just testing if one function is returning the 
correct output, not a multitude of different variables being passed through that
 emulates a user using the web page. Just testing if a function is returning the
 correct output would be a case for unit testing if not a custom test case.

## 3
Yes I would because a unit test can just test if the feature is working as intended
and so just testing if a message is being able to be sent and received 

## 4
Yes I would because this is a simple enough test where I can just test one part 
that isn't being affected by other moving parts. 