import react from "react";
import './Footer.css';

export default function Footer() {
    return (
        <footer >
            <div class="row">
                <div class="col">               
                    <h5>Contact Info</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">22 Innovation Steet, CA, US</a></li>
                        <li class="nav-item mb-2"><a href="mailto:office@syncmobile.com" class="nav-link p-0 text-body-secondary">office@syncmobile.com</a></li>
                        <li class="nav-item mb-2"><a href="tel:+4437694523" class="nav-link p-0 text-body-secondary">+4437694523</a></li>               
                    </ul>                  
                </div>

                <div class="col">
                    <h5>Value Links</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Terms & Conditions</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Article Details</a></li>
                    </ul>
                </div>
                
                <div class="col">
                    <h5>Other Apps</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Scientific Calculator</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Advanced Timer</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Music Store</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul class="nav flex-row">
                        <li class="nav-item mb-4 me-2 social"><a href="#" class="nav-link p-0 text-body-secondary rounded-circle"><i class="bi bi-facebook"></i></a></li>
                        <li class="nav-item mb-4 me-2 social"><a href="#" class="nav-link p-0 text-body-secondary rounded-circle"><i class="bi bi-twitter"></i></a></li>
                        <li class="nav-item mb-4 me-2 social"><a href="#" class="nav-link p-0 text-body-secondary rounded-circle"><i class="bi bi-pinterest"></i></a></li>
                        <li class="nav-item mb-4 me-2 social" ><a href="#" class="nav-link p-0 text-body-secondary rounded-circle"><i class="bi bi-instagram"></i></a></li>
                    </ul>
                </div>
            </div>    
        </footer>
    )
}

