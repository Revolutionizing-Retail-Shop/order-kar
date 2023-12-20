import React from 'react'
import Icon from './Icon';


function Footer()
{
  const year = new Date().getFullYear();
return(
          <>
          <div class="container">
            <footer class="py-0">
              <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Get monthly updates about our products.</p>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label for="newsletter1" class="visually-hidden">Email address</label>
                      <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                      <button class="btn btn-primary" type="button">Subscribe</button>
                    </div>
                  </form>
                
                  <p>&copy; {year} OrderKar, Pvt Ltd. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                  <li></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><Icon name="Facebook" width={30} height={30} color="blue"/> </a></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><Icon name="X" width={30} height={30} color="blue"/></a></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><Icon name="Instagram" width={30} height={30} color="blue"/></a></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><Icon name="WhatsApp" width={30} height={30} color="blue"/></a></li>
                </ul>
              </div>
            </footer>
          </div>
          </>
  );
}

export default Footer
