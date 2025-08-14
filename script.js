// Slide data and management
let currentSlide = 0
const totalSlides = 8

const slides = [
  {
    id: 1,
    title: "Who We Are — Greenice",
    type: "intro",
  },
  {
    id: 2,
    title: "Your Vision, Our Responsibility",
    type: "understanding",
  },
  {
    id: 3,
    title: "Core System Components",
    type: "features",
  },
  {
    id: 4,
    title: "Agile, Transparent, Reliable",
    type: "approach",
  },
  {
    id: 5,
    title: "Meet Your Dedicated Team",
    type: "team",
  },
  {
    id: 6,
    title: "3-Month Warranty & Ongoing Support",
    type: "warranty",
  },
  {
    id: 7,
    title: "Estimated Scope, Time & Budget",
    type: "budget",
  },
  {
    id: 8,
    title: "Let's Move Forward",
    type: "next-steps",
  },
]

// Initialize presentation
document.addEventListener("DOMContentLoaded", () => {
  generateSlideIndicators()
  renderSlide()
  updateNavigation()
})

// Generate slide indicators
function generateSlideIndicators() {
  const indicatorsContainer = document.getElementById("slideIndicators")
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement("div")
    indicator.className = "indicator"
    indicator.onclick = () => goToSlide(i)
    indicatorsContainer.appendChild(indicator)
  }
}

// Navigation functions
function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++
    renderSlide()
    updateNavigation()
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--
    renderSlide()
    updateNavigation()
  }
}

function goToSlide(index) {
  currentSlide = index
  renderSlide()
  updateNavigation()
}

// Update navigation state
function updateNavigation() {
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")
  const slideCounter = document.getElementById("slideCounter")
  const indicators = document.querySelectorAll(".indicator")

  // Update buttons
  prevBtn.disabled = currentSlide === 0
  nextBtn.disabled = currentSlide === totalSlides - 1

  // Update counter
  slideCounter.textContent = `Slide ${currentSlide + 1} of ${totalSlides}`

  // Update indicators
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide)
  })
}

// Render current slide
function renderSlide() {
  const slideContent = document.getElementById("slideContent")
  const slide = slides[currentSlide]

  switch (slide.type) {
    case "intro":
      slideContent.innerHTML = renderIntroSlide()
      break
    case "understanding":
      slideContent.innerHTML = renderUnderstandingSlide()
      break
    case "features":
      slideContent.innerHTML = renderFeaturesSlide()
      break
    case "approach":
      slideContent.innerHTML = renderApproachSlide()
      break
    case "team":
      slideContent.innerHTML = renderTeamSlide()
      break
    case "warranty":
      slideContent.innerHTML = renderWarrantySlide()
      break
    case "budget":
      slideContent.innerHTML = renderBudgetSlide()
      break
    case "next-steps":
      slideContent.innerHTML = renderNextStepsSlide()
      break
    default:
      slideContent.innerHTML = renderIntroSlide()
  }
}

// Slide templates
function renderIntroSlide() {
  return `
        <div class="slide-title">
            <h1>Who We Are — Greenice</h1>
            <div class="title-underline"></div>
        </div>

        <div class="two-column">
            <div>
                <div class="info-card green">
                    <h3>Our Expertise</h3>
                    <p>Greenice is a full-cycle development company with <strong>10+ years of experience</strong> building custom CRM, ERP, and logistics platforms.</p>
                </div>

                <div class="info-card blue">
                    <h3>Our Specialization</h3>
                    <p>We specialize in digitizing operations for logistics and B2B companies, creating scalable software solutions ready for commercialization.</p>
                </div>

                <div style="text-align: center;">
                    <a href="https://www.greenice.net" target="_blank" rel="noopener noreferrer" 
                       style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border: 1px solid #16a34a; color: #16a34a; text-decoration: none; border-radius: 0.5rem; transition: background-color 0.2s;"
                       onmouseover="this.style.backgroundColor='#f0fdf4'" onmouseout="this.style.backgroundColor='transparent'">
                        <i class="fas fa-globe"></i>
                        www.greenice.net
                    </a>
                </div>
            </div>

            <div>
                <h3 style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">Our Previous Projects</h3>

                <div class="project-card">
                    <div class="project-header">
                        <i class="fas fa-check-circle check-icon"></i>
                        <div>
                            <h4 class="project-title">Keys4U Field Service Platform</h4>
                            <p class="project-description">Complete web + mobile solution for UK-based locksmith company</p>
                            <ul class="project-features">
                                <li>• Real-time order dispatching based on technician geolocation</li>
                                <li>• Mobile app for field staff with route, photos, and task management</li>
                                <li>• Admin dashboard to track performance and invoice generation</li>
                            </ul>
                            <a href="https://www.keys4ulocksmith.co.uk/" target="_blank" rel="noopener noreferrer" class="project-link">
                                Visit Keys4U Project <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-header">
                        <i class="fas fa-check-circle check-icon"></i>
                        <div>
                            <h4 class="project-title">Toolsey.com</h4>
                            <p class="project-description">AI-powered CRM and scheduling tool for construction field</p>
                            <ul class="project-features">
                                <li>• Automates task assignment and communication with field teams</li>
                                <li>• Deep API integrations and mobile-first workflows</li>
                            </ul>
                            <a href="https://toolsey.com" target="_blank" rel="noopener noreferrer" class="project-link">
                                Visit Toolsey.com <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-header">
                        <i class="fas fa-check-circle check-icon"></i>
                        <div>
                            <h4 class="project-title">Keranique ERP System</h4>
                            <p class="project-description">Custom ERP for Atlantic Coast Brands (Inc. 500 cosmetics corporation)</p>
                            <ul class="project-features">
                                <li>• Tracks orders from various sources (eCommerce, call centers)</li>
                                <li>• Supports 7 departments: Customer Service, Finance, Marketing, etc.</li>
                                <li>• Streamlined workflows and optimized operations</li>
                            </ul>
                            <a href="https://keranique.com/" target="_blank" rel="noopener noreferrer" class="project-link">
                                Visit Keranique <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="portfolio-link">
                    <a href="https://greenice.net/case-studies/" target="_blank" rel="noopener noreferrer">
                        More proof? Check out our portfolio <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `
}

function renderUnderstandingSlide() {
  return `
        <div class="slide-title">
            <h1>Your Vision, Our Responsibility</h1>
            <div class="title-underline"></div>
        </div>

        <div class="two-column">
            <div>
                <div style="background: linear-gradient(135deg, #f0fdf4, #eff6ff); padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
                    <h3 style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">Project Understanding</h3>
                    <p style="color: #374151; line-height: 1.6; margin-bottom: 1rem;">
                        You're looking to build a comprehensive <strong>CRM + ERP platform</strong> with integrated GPS tracking and a mobile app, in collaboration with your strategic partner.
                    </p>
                    <p style="color: #374151; line-height: 1.6;">
                        We understand the expectations for <strong>high-end UX/UI design</strong> (on par with Oura and Incheq) and the need for robust logistics-specific workflows.
                    </p>
                </div>

                <div class="info-card yellow">
                    <h3>Quality Standards</h3>
                    <p>We're committed to delivering enterprise-grade solutions with premium UX/UI design that matches industry leaders.</p>
                </div>
            </div>

            <div>
                <h3 style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">Core Objectives</h3>

                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb;">
                        <i class="fas fa-users" style="color: #16a34a; font-size: 1.5rem; margin-top: 0.25rem; flex-shrink: 0;"></i>
                        <div>
                            <h4 style="font-weight: 600; color: #111827;">Custom CRM</h4>
                            <p style="font-size: 0.875rem; color: #6b7280;">Manage clients, leads, and operations</p>
                        </div>
                    </div>

                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb;">
                        <i class="fas fa-database" style="color: #2563eb; font-size: 1.5rem; margin-top: 0.25rem; flex-shrink: 0;"></i>
                        <div>
                            <h4 style="font-weight: 600; color: #111827;">ERP Modules</h4>
                            <p style="font-size: 0.875rem; color: #6b7280;">Logistics, warehousing, and dispatch</p>
                        </div>
                    </div>

                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb;">
                        <i class="fas fa-map-marker-alt" style="color: #dc2626; font-size: 1.5rem; margin-top: 0.25rem; flex-shrink: 0;"></i>
                        <div>
                            <h4 style="font-weight: 600; color: #111827;">GPS Tracking</h4>
                            <p style="font-size: 0.875rem; color: #6b7280;">Real-time mapping and device integration</p>
                        </div>
                    </div>

                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb;">
                        <i class="fas fa-chart-bar" style="color: #7c3aed; font-size: 1.5rem; margin-top: 0.25rem; flex-shrink: 0;"></i>
                        <div>
                            <h4 style="font-weight: 600; color: #111827;">Web Dashboard</h4>
                            <p style="font-size: 0.875rem; color: #6b7280;">Responsive admin panel and analytics</p>
                        </div>
                    </div>

                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb;">
                        <i class="fas fa-mobile-alt" style="color: #ea580c; font-size: 1.5rem; margin-top: 0.25rem; flex-shrink: 0;"></i>
                        <div>
                            <h4 style="font-weight: 600; color: #111827;">Mobile App</h4>
                            <p style="font-size: 0.875rem; color: #6b7280;">Native mobile application</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

function renderFeaturesSlide() {
  return `
        <div class="slide-title">
            <h1>Core System Components</h1>
            <div class="title-underline"></div>
        </div>

        <div class="feature-grid">
            <div class="feature-card">
                <div class="feature-header">
                    <i class="fas fa-users feature-icon green"></i>
                    <h3 class="feature-title">CRM</h3>
                </div>
                <ul class="feature-list">
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Lead management</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Client profiles</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Sales pipelines</li>
                </ul>
            </div>

            <div class="feature-card">
                <div class="feature-header">
                    <i class="fas fa-database feature-icon blue"></i>
                    <h3 class="feature-title">ERP</h3>
                </div>
                <ul class="feature-list">
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Inventory management</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Order processing</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Fleet dispatch</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Documentation</li>
                </ul>
            </div>

            <div class="feature-card">
                <div class="feature-header">
                    <i class="fas fa-map-marker-alt feature-icon red"></i>
                    <h3 class="feature-title">GPS Tracking</h3>
                </div>
                <ul class="feature-list">
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Real-time tracking</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Route history</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Geofencing</li>
                </ul>
            </div>

            <div class="feature-card">
                <div class="feature-header">
                    <i class="fas fa-chart-bar feature-icon purple"></i>
                    <h3 class="feature-title">Admin Panel</h3>
                </div>
                <ul class="feature-list">
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Dashboards</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Analytics</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Access controls</li>
                </ul>
            </div>

            <div class="feature-card">
                <div class="feature-header">
                    <i class="fas fa-mobile-alt feature-icon orange"></i>
                    <h3 class="feature-title">Mobile App</h3>
                </div>
                <ul class="feature-list">
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Driver interface</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Route logs</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Check-ins</li>
                </ul>
            </div>

            <div class="feature-card">
                <div class="feature-header">
                    <i class="fas fa-cogs feature-icon gray"></i>
                    <h3 class="feature-title">Integrations</h3>
                </div>
                <ul class="feature-list">
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> GPS hardware</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Email & SMS</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Billing systems</li>
                    <li><i class="fas fa-check-circle" style="color: #16a34a;"></i> Role-based access</li>
                </ul>
            </div>
        </div>
    `
}

function renderApproachSlide() {
  return `
        <div class="slide-title">
            <h1>Agile, Transparent, Reliable</h1>
            <div class="title-underline"></div>
            <p class="slide-subtitle">We follow a proven full-cycle development process</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; flex: 1;">
            <div class="process-grid">
                <div class="process-step">
                    <div class="step-number green">1</div>
                    <h3 class="step-title">Discovery & Requirements</h3>
                    <p class="step-description">Gathering detailed requirements and understanding your business needs</p>
                </div>

                <div class="process-step">
                    <div class="step-number blue">2</div>
                    <h3 class="step-title">UX/UI Design</h3>
                    <p class="step-description">Creating intuitive designs for both web and mobile platforms</p>
                </div>

                <div class="process-step">
                    <div class="step-number purple">3</div>
                    <h3 class="step-title">Agile Development</h3>
                    <p class="step-description">Development in sprints with regular updates and feedback</p>
                </div>

                <div class="process-step">
                    <div class="step-number orange">4</div>
                    <h3 class="step-title">QA & Testing</h3>
                    <p class="step-description">Comprehensive testing to ensure quality and reliability</p>
                </div>

                <div class="process-step">
                    <div class="step-number red">5</div>
                    <h3 class="step-title">Delivery & Support</h3>
                    <p class="step-description">Final delivery with warranty and ongoing support</p>
                </div>
            </div>
        </div>

        <div class="info-card green" style="margin-top: 2rem;">
            <h3 style="text-align: center; margin-bottom: 0.75rem;">Why Choose Our Approach?</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center;">
                <div>
                    <i class="fas fa-shield-alt" style="font-size: 2rem; color: #16a34a; margin-bottom: 0.5rem;"></i>
                    <h4 style="font-weight: 500; color: #111827;">Transparent</h4>
                    <p style="font-size: 0.875rem; color: #6b7280;">Regular updates and clear communication</p>
                </div>
                <div>
                    <i class="fas fa-clock" style="font-size: 2rem; color: #16a34a; margin-bottom: 0.5rem;"></i>
                    <h4 style="font-weight: 500; color: #111827;">On-Time</h4>
                    <p style="font-size: 0.875rem; color: #6b7280;">Predictable delivery schedules</p>
                </div>
                <div>
                    <i class="fas fa-check-circle" style="font-size: 2rem; color: #16a34a; margin-bottom: 0.5rem;"></i>
                    <h4 style="font-weight: 500; color: #111827;">Quality</h4>
                    <p style="font-size: 0.875rem; color: #6b7280;">Enterprise-grade solutions</p>
                </div>
            </div>
        </div>
    `
}

function renderTeamSlide() {
  return `
        <div class="slide-title">
            <h1>Meet Your Dedicated Team</h1>
            <div class="title-underline"></div>
            <p class="slide-subtitle">You'll work with an experienced, cross-functional team</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; flex: 1;">
            <div class="team-grid">
                <div class="team-member">
                    <div class="member-avatar green">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3 class="member-title">Project Manager</h3>
                    <p class="member-description">Coordination and communication</p>
                </div>

                <div class="team-member">
                    <div class="member-avatar blue">
                        <i class="fas fa-database"></i>
                    </div>
                    <h3 class="member-title">Backend Developer</h3>
                    <p class="member-description">Server-side architecture</p>
                </div>

                <div class="team-member">
                    <div class="member-avatar purple">
                        <i class="fas fa-globe"></i>
                    </div>
                    <h3 class="member-title">Frontend Developer</h3>
                    <p class="member-description">Web interface development</p>
                </div>

                <div class="team-member">
                    <div class="member-avatar orange">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h3 class="member-title">Mobile Developer</h3>
                    <p class="member-description">Native app development</p>
                </div>

                <div class="team-member">
                    <div class="member-avatar red">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3 class="member-title">QA Engineer</h3>
                    <p class="member-description">Quality assurance</p>
                </div>

                <div class="team-member">
                    <div class="member-avatar gray">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h3 class="member-title">Team Lead</h3>
                    <p class="member-description">Technical leadership</p>
                </div>
            </div>
        </div>

        <div class="info-card blue" style="margin-top: 2rem;">
            <h3 style="text-align: center; margin-bottom: 0.75rem;">Our Specializations</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center;">
                <div>
                    <i class="fas fa-database" style="font-size: 2rem; color: #2563eb; margin-bottom: 0.5rem;"></i>
                    <h4 style="font-weight: 500; color: #111827;">CRM/ERP Architecture</h4>
                    <p style="font-size: 0.875rem; color: #6b7280;">Enterprise system design</p>
                </div>
                <div>
                    <i class="fas fa-map-marker-alt" style="font-size: 2rem; color: #2563eb; margin-bottom: 0.5rem;"></i>
                    <h4 style="font-weight: 500; color: #111827;">GPS Integrations</h4>
                    <p style="font-size: 0.875rem; color: #6b7280;">Real-time tracking systems</p>
                </div>
                <div>
                    <i class="fas fa-shield-alt" style="font-size: 2rem; color: #2563eb; margin-bottom: 0.5rem;"></i>
                    <h4 style="font-weight: 500; color: #111827;">Enterprise Security</h4>
                    <p style="font-size: 0.875rem; color: #6b7280;">Data protection & compliance</p>
                </div>
            </div>
        </div>
    `
}

function renderWarrantySlide() {
  return `
        <div class="slide-title">
            <h1>3-Month Warranty & Ongoing Support</h1>
            <div class="title-underline"></div>
        </div>

        <div style="max-width: 1000px; margin: 0 auto;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
                <div style="padding: 2rem; background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; border-radius: 0.5rem; text-align: center;">
                    <div style="width: 4rem; height: 4rem; background: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                        <i class="fas fa-shield-alt" style="font-size: 2rem; color: white;"></i>
                    </div>
                    <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-bottom: 1rem;">3-Month Warranty</h3>
                    <p style="color: #374151; line-height: 1.6;">
                        Complete post-launch warranty covering all functionality, bug fixes, and performance optimizations at no additional cost.
                    </p>
                </div>

                <div style="padding: 2rem; background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 1px solid #93c5fd; border-radius: 0.5rem; text-align: center;">
                    <div style="width: 4rem; height: 4rem; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                        <i class="fas fa-clock" style="font-size: 2rem; color: white;"></i>
                    </div>
                    <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-bottom: 1rem;">Ongoing Support</h3>
                    <p style="color: #374151; line-height: 1.6;">
                        Continued technical support, maintenance, and feature enhancements to ensure your system grows with your business.
                    </p>
                </div>
            </div>

            <div style="margin-top: 3rem; text-align: center;">
                <p style="font-size: 1.125rem; color: #6b7280;">
                    Complete coverage for peace of mind during the critical post-launch period.
                </p>
            </div>
        </div>
    `
}

function renderBudgetSlide() {
  return `
        <div class="slide-title">
            <h1>Estimated Scope, Time & Budget</h1>
            <div class="title-underline"></div>
            <p class="slide-subtitle">Based on your initial brief, our preliminary estimate is:</p>
        </div>

        <div style="max-width: 1000px; margin: 0 auto;">
            <div class="budget-grid">
                <div class="budget-card blue">
                    <i class="fas fa-clock budget-icon blue"></i>
                    <h3 class="budget-title">Development Time</h3>
                    <div class="budget-value blue">900-1700</div>
                    <p class="budget-label">Development Hours</p>
                </div>

                <div class="budget-card green">
                    <div style="width: 3rem; height: 3rem; background: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                        <span style="color: white; font-weight: bold; font-size: 1.125rem;">$</span>
                    </div>
                    <h3 class="budget-title">Hourly Rate</h3>
                    <div class="budget-value green">$32-35</div>
                    <p class="budget-label">USD per hour</p>
                </div>
            </div>

            <div class="info-card yellow" style="margin-bottom: 2rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                    <div style="width: 1.5rem; height: 1.5rem; background: #eab308; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.25rem;">
                        <span style="color: white; font-size: 0.875rem; font-weight: bold;">!</span>
                    </div>
                    <div>
                        <h3 style="font-weight: 600; color: #111827; margin-bottom: 0.5rem;">Important Note</h3>
                        <p style="color: #374151;">
                            Final estimate will be provided after discovery call and full requirement clarification. The hourly rate depends on complexity and tech stack requirements.
                        </p>
                    </div>
                </div>
            </div>

            <div style="background: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb;">
                <h3 style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem; text-align: center;">Estimate Breakdown Factors</h3>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                    <div>
                        <h4 style="font-weight: 600; color: #111827; margin-bottom: 0.75rem;">Time Factors</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem;">• System complexity and integrations</li>
                            <li style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem;">• Custom GPS tracking requirements</li>
                            <li style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem;">• Mobile app features and platforms</li>
                            <li style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem;">• Third-party API integrations</li>
                            <li style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem;">• Testing and quality assurance</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style="font-weight: 600; color: #111827; margin-bottom: 0.75rem;">Rate Factors</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem;">• Technology stack complexity</li>
                            <li style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem;">• Real-time processing requirements</li>
                            <li style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem;">• Security and compliance needs</li>
                            <li style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem;">• Scalability requirements</li>
                            <li style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem;">• Custom integrations depth</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
}

function renderNextStepsSlide() {
  return `
        <div class="slide-title">
            <h1>Let's Move Forward</h1>
            <div class="title-underline"></div>
        </div>

        <div style="max-width: 1000px; margin: 0 auto;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-bottom: 2rem;">
                <div style="padding: 2rem; background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; border-radius: 0.5rem; text-align: center;">
                    <div style="width: 4rem; height: 4rem; background: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                        <i class="fas fa-users" style="font-size: 2rem; color: white;"></i>
                    </div>
                    <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-bottom: 1rem;">Discovery Call</h3>
                    <p style="color: #374151; line-height: 1.6; margin-bottom: 1rem;">
                        We propose a short discovery call to clarify business goals and internal workflows.
                    </p>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: #16a34a;">
                        <i class="fas fa-check-circle"></i>
                        <span style="font-weight: 500;">Clarify business goals</span>
                    </div>
                </div>

                <div style="padding: 2rem; background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 1px solid #93c5fd; border-radius: 0.5rem; text-align: center;">
                    <div style="width: 4rem; height: 4rem; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                        <i class="fas fa-chart-bar" style="font-size: 2rem; color: white;"></i>
                    </div>
                    <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-bottom: 1rem;">Detailed Proposal</h3>
                    <p style="color: #374151; line-height: 1.6; margin-bottom: 1rem;">
                        After the call, you'll receive a comprehensive proposal with all details.
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: #2563eb;">
                            <i class="fas fa-check-circle" style="font-size: 1rem;"></i>
                            <span style="font-size: 0.875rem;">Technical scope breakdown</span>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: #2563eb;">
                            <i class="fas fa-check-circle" style="font-size: 1rem;"></i>
                            <span style="font-size: 0.875rem;">Timeline & team structure</span>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: #2563eb;">
                            <i class="fas fa-check-circle" style="font-size: 1rem;"></i>
                            <span style="font-size: 0.875rem;">Price and development time</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cta-section">
                <h3 class="cta-title">Ready to Start Your Project?</h3>
                <p class="cta-description">
                    Let's discuss your vision and create a custom solution that drives your business forward.
                </p>
                <div style="display: flex; justify-content: center;">
                    <a href="https://www.greenice.net" target="_blank" rel="noopener noreferrer" class="cta-button">
                        <i class="fas fa-globe"></i>
                        Visit greenice.net
                    </a>
                </div>
            </div>

            <div class="contact-info">
                <p>Contact Information</p>
                <div class="contact-details">
                    <span>📧 Email: contact@greenice.net</span>
                    <span>🌐 Website: www.greenice.net</span>
                    <span>📱 Let's connect!</span>
                </div>
            </div>
        </div>
    `
}

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault()
    nextSlide()
  } else if (event.key === "ArrowLeft") {
    event.preventDefault()
    prevSlide()
  } else if (event.key >= "1" && event.key <= "8") {
    event.preventDefault()
    goToSlide(Number.parseInt(event.key) - 1)
  }
})
