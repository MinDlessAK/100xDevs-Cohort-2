Offline Lecture 1.5 
========================================================================================================================================
Topic

1.Async functions vs sync functions, real use of callbacks 
2.JS Browser architecture 
3.Promises 
4.Async await
========================================================================================================================================
1.Async functions vs sync functions, real use of callbacks 


****************************************************************************************************************************************
Async functions vs sync functions

What does synchronous mean?
Together, one after the other, sequential Only one thing is happening at a time

What does asynchronous mean?
Opposite of synchronous.
Happens in parts.
Multiple things are context switching with each other.

Lets build some intuition
Human brain and body is single threaded
1. We can only do one thing at a time
2. But we can context switch b/w tasks, or we can delegate tasks to other people

You have 4 tasks -
1. Boil water
2. Cut vegetables
3. Cut maggi packet
4. Get ketchup from the shop nearby



How would you do this? Synchronously or Asynchronously?

Synchronously (One after another)
 Approch of doing taks sequentialy,One after another

          
sequence-     1             2            3                        4
Task -     BoilWater  CutVegetables CutMaggiPacket "GetKetchup from the shop nearby" |   Totaltime
time -        5min      +       2min     +      10min      +             20min                   |  = 37 mins 

Or, you could multi-task
(More technically, context switch and delegate)


Asynchronously (context switch and delegate)
 Approch of doing taks context switch and delegate

context switch and delegate     Task                    ProcessOfDelegate                                             completeSequence
Turn on gas(1s)-              BoilWater    1(after 1sec)->4th task(Delegate task to house help (kamla didi))              (2sec)
                                                                                                                     1sec->after cuting
                                                                                                                     maggiPacket 1 more 
                                                                                                                     sec use in total  (2sec)

Delegate task                GetKetchup           4th task Delegate task to house help (kamla didi)                      (10 min)
                                                                                                                     In this time we are cutting veggie it us 10 min to cut viggie both done in total 10 min 
Cut Maggi packet            CutMaggiPacket          Came back after delegate task And cut CutMaggiPacket                 (2 mins)

Cut vegetables              CutVegetables           After cuting maggiPacket start cuting veggie                         (10 mins)
                                                                                                                 when 8min done in this task kamla bring ketchup and after that we are done in 2 min in total (10 min)
Total Time 
First gas on that take "1sec time" then we delegate task 4 to kamla di and  doing  task simultaneously   cutting maggi in 2min but she is still is shop After cutting maggiPacket started cutting  veggie , On 8 min  of cutting  veggie  She bring ketchup after 2 min Viggie cutting done all task done In 12 min.


Even if you are single threaded (brain can do only one thing at a time), you can do things parallely by Delegating 
You can also context switch between tasks if need be (the net time to do both the things would still be the same) 
Net amount of time take to do a task can be decreased  
by doing these two things (delegating and context switching)


How does JS do the same? Can JS delegate? Can JS context switch? 
