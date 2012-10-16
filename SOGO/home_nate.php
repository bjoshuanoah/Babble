<!DOCTYPE html>
<html>
<head>
<title>Share One Get One | <?=$page;?> </title>
<meta charset="utf-8">
<link href="<?=base_url();?>assets/css/style_nate.css" type="text/css" rel="stylesheet">
<link rel="shortcut icon" href="<?=img_path('favicon.ico')?>" />
<script src="<?=base_url();?>assets/js/jquery.js"></script>
<script src="<?=base_url();?>assets/js/tooltip.js"></script>
<script src="<?=base_url();?>assets/js/jquery.blockUI.js"></script>
<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript" src="http://s.sharethis.com/loader.js"></script>
<script type="text/javascript">stLight.publisher="9451a269-46a6-468e-a669-364574afe07e";</script>

</head>
<script src='http://connect.facebook.net/en_US/all.js'></script>
<script type="text/javascript">
    var js_params = <?=$js_params;?>;
</script>
<script src="<?=base_url();?>assets/js/sogo.js"></script>
<body id="<?=$page;?>">
<header id="head">
    <div class="row">
    	<div id="logo1" class="two columns"><a href="#"><img id="logo" src="<?=base_url();?>assets/images/logo.png" width="99" height="50" alt="logo"></a></div>
	<div id="share1" class="two columns">
		<a href="#" id="share" onClick="return false;"><img src="<?=base_url();?>assets/images/share.png" width="100" height="57"></a>
	</div>	
    </div>
    <div id="shareBox">
	      <span class='st_facebook_vcount' displayText='Facebook'></span>
	      <span class='st_googleplus_vcount' displayText='G+'></span>
	      <span class='st_twitter_vcount' displayText='Tweet'></span>
	      <span class='st_linkedin_vcount' displayText='LinkedIn'></span>
	      <span class='st_email_vcount' displayText='Email'></span>
    </div>
    
</header>
	<div id="maincontent" class="row">
		<div class="row">
			<section class="info nine columns offset-by-one">
				<p class="sogoHeaderText">Share One Get One</p>
				<p><?=$campaign->campaign_about;?></p>
				<?php if($page == 'home'): ?>
			
			
				<div class="promoButtonbefore"></div>
				<a href="#" onclick="fblogin(); return false;"><span class="promoButton"><p><?=$campaign->campaign_offer;?></p></span></a>
				<?php endif; ?>
			
			</section>
					<section class="promoAction">

					</section> 

			<section class="promoImage six columns">
				<img src="<?=base_url();?>assets/images/iceCreamCup.png">

			</section>
			
		</div>
		<?php if($page == 'home'): ?>
		<div id="recentSupporters" class="row">
			<div class="sixteen columns centered">
			<h3>Recent Supporters</h3>
				<?php foreach ($last_six as $i => $username): ?>
					<div class="supportContainer">
						<div class="rounded-crop">
						      <img src="http://graph.facebook.com/<?=$username->username;?>/picture?type=large" title="<?=$username->fname." ".$username->lname; ?>" alt="<?=$username->fname." ".$username->lname; ?>">
						</div>
						<span <?=$username->fname." ".$username->lname; ?></span>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
		<?php endif; ?>

	</div>
	<footer class="content">
		<div id="footercontainer" class="row">
			<div class="twelve columns">
			<?php if($page != 'coupon'): ?>
                     
                            <?php if($page == 'likes'):?>
       			<div class="row share_claim">    
                                   <a href="#" onclick="postToFeed(); return false;"><img src="<?=base_url();?>/assets/images/buttonshare.png" alt="Share" width="331" height="77" id="Image9"></a>
                            </div>
				<div class="row">
					<h2>Show Your Support!</h2>
					<span>Connect with both <?=$campaign->company_name;?> and <?=$campaign->charity_name;?></span>
				</div>
				<?php endif; ?>
				<section class="row about_cc">
       				<section class="company seven columns offset-by-one">
       					<img id="company" src="<?=base_url();?>/assets/images/companyL.png" width="179" height="86" alt="<?=$campaign->company_name;?>">
       
       					<article>
       						<h3>About <?=$campaign->company_name;?></h3>
       						<span><?=$campaign->company_about;?></span>
       					</article>
       
       					
       				</section>
       
       				<section class="charity seven columns">
       						<img id="charity" src="<?=base_url();?>/assets/images/charityL.png" width="179" height="86" alt="?=$campaign->charity_name;?>">
       
       					<article>
       						<h3>About <?=$campaign->charity_name;?></h3>
       						<span id="newBold"><?=$campaign->charity_about;?></span>
       					</article>
       
       					
       				</section>
                            </section>
                            <section class="row">
                                   <div class="company seven columns offset-by-one">
                                          <div class="socials">
              					<?php if($page == 'home'): ?>
       						
       
       
       								<h3><?=$campaign->company_name;?>'s Links</h3>
       						<p><a href="<?=$campaign->company_website;?>" class="website"></a>
       						<a href="<?=$campaign->company_facebook;?>" class="facebook"></a>
       						<a href="<?=$campaign->company_twitter;?>" class="twitter"></a></p>
       						<?php else:?>
       							<?php if( ! $company_is_liked): ?>
       							<div class="fb-like" id="facebookLikeButton_left" data-href="https://www.facebook.com/pages/Golden-Spoon-Frozen-Yogurt/130461989105" data-send="false" data-layout="button_count" data-width="450" data-show-faces="false"></div>
       							<?php else: ?>
       							<div id="checkmark_left"><img src="<?=base_url();?>assets/images/checkmark.png" width="93" height="100" alt="checkmark"></div>
       							<?php endif; ?>
       						<?php endif; ?>
				       	</div>
                                   </div>
                                   
                                   <div class="charity seven columns">
                                          <div class="socials">
              					<?php if($page == 'home'): ?>
       
       								<h3><?=$campaign->charity_name;?>'s Links</h3>
       						<p><a href="<?=$campaign->charity_website;?>" class="website"></a>
       						<a href="<?=$campaign->charity_facebook;?>" class="facebook"></a>
       						<span id="rightTwitter"><a href="<?=$campaign->charity_twitter;?>" class="twitter"></a></span></p>
       						<?php else: ?>
       							<?php if( ! $charity_is_liked): ?>
       							<div class="fb-like" id="facebookLikeButton_right" data-href="https://www.facebook.com/chelseaslight?fref=ts" data-send="false" data-layout="button_count" data-width="450" data-show-faces="false"></div>
       							<?php else: ?>
       							<div id="checkmark_right"><img src="<?=base_url();?>assets/images/checkmark.png" width="93" height="100" alt="checkmark"></div>
       							<?php endif; ?>
       						<?php endif; ?>
       					</div>
                                   </div>
                            </section>
					
			    
                
			<?php else: ?>
			    <div class="eight columns">
					<div id="info" class="row">
					<div class="four columns">
						<span class="icon-checkslice"></span>
						<!-- <img src="<?=base_url();?>assets/images/checkslice.png" width="86" height="101"> -->
					</div>
					<div class="twelve columns">
					<section>
						<h2>Congratulations!</h2>
						<span>You SOGO coupon has been emailed to <?=$email;?></span>
					</section>
					</div>
					</div>

					<div id="info" class="row">
						<span><span class="icon-print"></span> you can also <a href="#" onclick="window.print(); return false;">print your coupon</a> here</span>
					</div>

					<div id="info" class="row">
						<h3>Keep Sharing!</h3>
						<span>The more you share, the more you help <?=$campaign->charity_name;?>.</span>
						<div class="keepSharing">
							<span class='st_facebook_vcount' displayText='Facebook'></span>
						    <span class='st_pinterest_vcount' displayText='Pinterest'></span>
						    <span class='st_twitter_vcount' displayText='Tweet'></span>
						    <span class='st_linkedin_vcount' displayText='LinkedIn'></span>
						    <span class='st_email_vcount' displayText='Email'></span>
						</div>
					</div>

					<div id="info" class="row">
						
						<h4>Did your email not arrive?</h4>
						<span>Add <span id="faux_anchor">coupons@share1getone.com</span> to your address book.</span>
						<span><span class="icon-email"></span><a href="<?=base_url();?><?=$campaign->campaign_uri;?>/resend">Resend My Coupon</a></span>
					</div>

					<div id="info" class="row">
						<span id="redeemCoupon"><span class="icon-bonus"></span>Redeem this coupon and <?=$campaign->company_name;?> will donate $1 to <?=$campaign->charity_name;?>.</span>
					</div>
				</div>
				
				<div id="phone" class="eight columns">
					<div id="phoneInfo" class="row">
						
					<section class="phoneText">
						Your SOGO redemption code for a FREE Spoonful (1/2) cup.
					</section>
					<section class="phoneImages">
						<img class="company" src="<?=base_url();?>assets/images/companyPhone.jpg" width="59" height="29">
						<img class="charity" src="<?=base_url();?>assets/images/charityPhone.jpg" width="59" height="29">
					</section>
					</div>
				</div>
			
                     
			
			
                     
                     <?php endif; ?>
                     </div>
                     <div class="four columns">
               	<?php if($page != "coupon"): ?>
                      
				<section class="supporters">
					<h2>Recent Supporters</h2>
					<section class="containerSupporters">
						<?php foreach ($last_supporters as $i => $username): ?>
			                            <div class="supporter">
                                                        <img src="http://graph.facebook.com/<?=$username->username;?>/picture" title="<?=$username->fname." ".$username->lname; ?>" alt="<?=$username->fname." ".$username->lname; ?>" style="vertical-align: middle; margin-right: 5px;"><span><?=$username->fname." ".$username->lname; ?></span>
                                                 </div>
                                          <?php endforeach; ?>
               		       </section>
				</section>
				<?php else: ?>
				<img id="charityLogo" src="<?=base_url();?>assets/images/charityCropped.png" />
				<img id="companyLogo" src="<?=base_url();?>assets/images/companyCropped.png" />
			
                      <?php endif;?>
                     </div>       
		       
		
		</div>
       </footer>
<script src ="<?=base_url();?>assets/js/main.js"></script>
<script src ="<?=base_url();?>assets/js/main.js"></script>
</body>
</html>