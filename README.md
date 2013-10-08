fullpage.scss
=============

An SCSS template for dynamically generating CSS ONLY slideshows and keyframes

##How it do
Fullpage.scss uses SASS/SCSS to create a CSS only slider. It only requires that you set up your HTML correctly and that you change 2 number variables in your fullpage.scss file, or put them in your own.

Fullpage.scss will take the numer of slides you input, dynamically generate CSS keyframes, create states where the slideshow will stop, allowing your viewer to read your slide, and set the width of your slides and slider dynamically based off of that number of slides.

If you want a better explanation, look it over. If you find something broken, create an issue and I'll try to fix it ASAP.

##Setting up your SCSS/SASS

To get going, you need to either uncomment and use the first two variables in fullpage.scss or (if you prefer not to edit plugin files) define two variables in your stylesheet.

	$number: #;
	// Set # as your number of slides

	$animation_delay: #;
	// Set # to adjust your delay. It takes the number of slides and multiplies it by this variable in order to get full duration of the animation.
	
##Setting up your HTML

	<!-- For full screen sections -->
	<section>
	  <div class="content">
	  </div>
	</section>
	
	<!-- For full screen sliders -->
	<section>
	  <div class="slider">
	    <div class="slides">
	      <section><!-- This level is a slide -->
	        <div class="content">
	        </div>
	      </section>
	    </div>
	  </div>
	</section>
	
##Known issues

This has only been tested in the most recent versions of Chrome, Safari, and Firefox so far. It's not likely that this wil be usable in legacy browsers, and it does not currently include any Javascript fallbacks, or any Javascript controls at all. If you'd like to add some, fork it yourself and give it a shot. This was created as an attempt to do this purely with CSS.