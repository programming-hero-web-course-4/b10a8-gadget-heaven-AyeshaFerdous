import React from "react";

const FAQ = () => {
  return (
    <div>
      <div class="w-11/12 mx-auto my-8">
        <h1 class="font-bold text-5xl mb-5">Important FAQ</h1>
        <div class="collapse collapse-arrow border-base-300 border">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            What type of website is this?
          </div>
          <div class="collapse-content">
            <p>
              This is a E-Commerce Website for Gadget Heaven. You can buy gadgets from this gadget heaven amazing website section for the users. so let's jump into this website.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow border-base-300 border">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Which Type of gadgets in this Website?
          </div>
          <div class="collapse-content">
            <p>
              There are different type of categories such as phones, accessories, laptop, smart watch. You can buy to this section and with new features also.

            </p>

            
          </div>
        </div>
        <div class="collapse collapse-arrow border-base-300 border">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
           Is this Website is helpful for users?
          </div>
          <div class="collapse-content">
            <p>
             Yeah.. This is a helpful for anytype of users. Product price is budget friendly so you can buy this.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FAQ;
