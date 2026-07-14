import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Users, CreditCard, Package, CalendarDays, Trophy, BarChart3,
  Receipt, Megaphone, Smartphone, Bell, ChevronDown, ChevronUp,
  ArrowRight, Check, Star, Shield, Clock, Cloud, Zap, Menu, X
} from 'lucide-react'

const features = [
  { icon: Users, title: 'Member Management', desc: 'Complete member profiles, contact info, and membership tracking in one place.' },
  { icon: CreditCard, title: 'Monthly Fee Tracking', desc: 'Automated fee collection, payment reminders, and overdue tracking.' },
  { icon: Package, title: 'Shuttle Stock Management', desc: 'Track shuttlecock inventory, stock alerts, and vendor management.' },
  { icon: CalendarDays, title: 'Court Booking', desc: 'Easy court reservations with time slots and availability calendar.' },
  { icon: Trophy, title: 'Tournament Management', desc: 'Organize tournaments, manage brackets, and track live scores.' },
  { icon: BarChart3, title: 'Reports & Analytics', desc: 'Comprehensive reports on finances, attendance, and club performance.' },
  { icon: Receipt, title: 'Expense Tracking', desc: 'Track all club expenses, categorize spending, and generate statements.' },
  { icon: Megaphone, title: 'Notices & Announcements', desc: 'Publish club notices, event updates, and important announcements.' },
  { icon: Smartphone, title: 'Attendance Tracking', desc: 'Digital attendance with daily, monthly views and percentage tracking.' },
  { icon: Bell, title: 'Payment Reminders', desc: 'Automated reminders for overdue fees and upcoming payment deadlines.' },
]

const whyChoose = [
  { icon: Zap, title: 'Easy to Use', desc: 'Intuitive interface designed for non-technical club administrators.' },
  { icon: Clock, title: 'Save Time', desc: 'Automate repetitive tasks and reduce manual bookkeeping.' },
  { icon: CreditCard, title: 'Transparent Finances', desc: 'Complete visibility into club income, expenses, and dues.' },
  { icon: Cloud, title: 'Cloud Based', desc: 'Access your club data from anywhere, on any device.' },
  { icon: Smartphone, title: 'Mobile Friendly', desc: 'Fully responsive design that works beautifully on phones.' },
  { icon: Shield, title: 'Secure Data', desc: 'Your data is protected with enterprise-grade security.' },
]

const pricingPlans = [
  { name: 'Starter', price: 'Free', period: '', desc: 'For small clubs getting started', features: ['Up to 20 members', 'Basic fee tracking', 'Court booking', 'Email support'], highlighted: false },
  { name: 'Standard', price: '₹999', period: '/month', desc: 'For growing clubs', features: ['Up to 50 members', 'Full fee management', 'Tournament tools', 'Reports & analytics', 'Priority support'], highlighted: true },
  { name: 'Professional', price: '₹1,999', period: '/month', desc: 'For established clubs', features: ['Unlimited members', 'All Standard features', 'Multi-court support', 'Advanced analytics', 'Custom branding', 'Phone support'], highlighted: false },
  { name: 'Enterprise', price: 'Custom', period: '', desc: 'For large organizations', features: ['Everything in Professional', 'Multi-venue support', 'API access', 'Dedicated account manager', 'SLA guarantee', 'On-site training'], highlighted: false },
]

const testimonials = [
  { name: 'Rajesh Kumar', role: 'President, Smash Badminton Club', text: 'Phoenix Court Hub transformed how we manage our 200+ member club. Fee collection is now effortless!', rating: 5 },
  { name: 'Anita Desai', role: 'Treasurer, Shuttle Stars', text: 'The expense tracking and reports saved us hours of manual work every month. Highly recommended!', rating: 5 },
  { name: 'Vikram Singh', role: 'Admin, Net Warriors AC', text: 'Court booking and tournament management features are outstanding. Our members love the ease of use.', rating: 5 },
]

const faqs = [
  { q: 'How long does setup take?', a: 'You can get started in under 10 minutes. Simply sign up, add your members, and you are ready to go. Our onboarding guide walks you through every step.' },
  { q: 'Can I import existing member data?', a: 'Yes! You can import members from CSV or Excel files. We also support data migration from other club management tools.' },
  { q: 'Is there a free trial for paid plans?', a: 'Absolutely. All paid plans come with a 14-day free trial. No credit card required to start.' },
  { q: 'How do payment reminders work?', a: 'The system automatically sends email and SMS reminders to members with pending fees. You can customize the reminder schedule and message templates.' },
  { q: 'Can members book courts themselves?', a: 'Yes, members can view court availability and make bookings through their member portal. Admin approval can be enabled if needed.' },
  { q: 'Is my data secure?', a: 'We use industry-standard encryption and regular backups. Your data is stored on secure cloud servers with 99.9% uptime guarantee.' },
]

export default function Landing() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [activePreview, setActivePreview] = useState(0)

  const previewTabs = ['Dashboard', 'Members', 'Finance', 'Inventory', 'Reports']

  return (
    <div className="overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2L15 8L21 10L15 12L12 18L9 12L3 10L9 8L12 2Z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-900">Phoenix Court Hub</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Link to="/dashboard" className="text-sm font-medium text-gray-700 hover:text-gray-900 px-4 py-2">Sign In</Link>
              <Link to="/dashboard" className="btn-primary text-sm">Get Started</Link>
            </div>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2">
              {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            <a href="#features" className="block text-sm text-gray-600 py-2">Features</a>
            <a href="#pricing" className="block text-sm text-gray-600 py-2">Pricing</a>
            <a href="#testimonials" className="block text-sm text-gray-600 py-2">Testimonials</a>
            <a href="#faq" className="block text-sm text-gray-600 py-2">FAQ</a>
            <Link to="/dashboard" className="btn-primary w-full text-center mt-3">Get Started</Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" /> Trusted by 500+ badminton clubs
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Manage Your Badminton Club{' '}
            <span className="text-primary-600">Smarter.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A complete platform to manage members, fees, tournaments, court bookings, inventory, and club operations — all in one place.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard" className="btn-primary text-base px-8 py-3 w-full sm:w-auto">
              Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <button className="btn-secondary text-base px-8 py-3 w-full sm:w-auto">
              Book Demo
            </button>
          </div>
        </div>

        {/* Hero mockup */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-b from-primary-50 to-white rounded-3xl p-2 shadow-soft border border-gray-100">
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-4">
                  <div className="bg-gray-700 rounded-md h-6 max-w-xs mx-auto flex items-center justify-center">
                    <span className="text-gray-400 text-xs">app.phoenixcourthub.com/dashboard</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Active Members', value: '148', color: 'bg-primary-500' },
                    { label: 'Monthly Collection', value: '₹1,47,000', color: 'bg-accent-green' },
                    { label: 'Outstanding Dues', value: '₹12,400', color: 'bg-accent-orange' },
                    { label: 'Attendance Rate', value: '87%', color: 'bg-primary-600' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                      <div className={`w-8 h-8 ${stat.color} rounded-lg mb-3 opacity-80`} />
                      <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-white rounded-xl p-4 shadow-sm h-40">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-semibold text-gray-700">Revenue Trends</p>
                      <div className="flex gap-2">
                        <div className="w-16 h-2 bg-primary-200 rounded-full" />
                        <div className="w-16 h-2 bg-accent-green/30 rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-end gap-2 h-20">
                      {[40, 55, 35, 65, 50, 75, 60, 80, 45, 70, 85, 55].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary-500/20 rounded-t-sm relative">
                          <div className="absolute bottom-0 left-0 right-0 bg-primary-500 rounded-t-sm" style={{ height: `${h}%` }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm h-40">
                    <p className="text-sm font-semibold text-gray-700 mb-4">Expenses</p>
                    <div className="flex items-center justify-center h-24">
                      <div className="w-20 h-20 rounded-full border-8 border-primary-500 border-t-accent-orange border-r-accent-green relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-700">₹74K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need to run your club</h2>
            <p className="mt-4 text-lg text-gray-500">Powerful features designed specifically for badminton club management.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {features.map((f, i) => (
              <div key={i} className="card-hover group cursor-default">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <f.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose Phoenix Court Hub</h2>
            <p className="mt-4 text-lg text-gray-500">Built by badminton enthusiasts, for badminton clubs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">See it in action</h2>
            <p className="mt-4 text-lg text-gray-500">Explore the key screens of Phoenix Court Hub.</p>
          </div>
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {previewTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActivePreview(i)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                  activePreview === i
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-300" />
              <div className="w-3 h-3 rounded-full bg-yellow-300" />
              <div className="w-3 h-3 rounded-full bg-green-300" />
            </div>
            <div className="p-8 min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {activePreview === 0 && <BarChart3 className="w-8 h-8 text-primary-600" />}
                  {activePreview === 1 && <Users className="w-8 h-8 text-primary-600" />}
                  {activePreview === 2 && <CreditCard className="w-8 h-8 text-primary-600" />}
                  {activePreview === 3 && <Package className="w-8 h-8 text-primary-600" />}
                  {activePreview === 4 && <BarChart3 className="w-8 h-8 text-primary-600" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{previewTabs[activePreview]} View</h3>
                <p className="text-gray-500 text-sm max-w-md">Interactive {previewTabs[activePreview].toLowerCase()} screen with real-time data, charts, and management tools.</p>
                <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg mx-auto">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-20 bg-gray-100 rounded-xl animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-gray-500">Choose the plan that fits your club. Upgrade anytime.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-6 ${plan.highlighted ? 'bg-primary-600 text-white ring-4 ring-primary-100 scale-105' : 'bg-white border border-gray-200'}`}>
                {plan.highlighted && <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-4">Most Popular</span>}
                <h3 className={`text-lg font-semibold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  {plan.period && <span className={`text-sm ${plan.highlighted ? 'text-primary-200' : 'text-gray-500'}`}>{plan.period}</span>}
                </div>
                <p className={`mt-2 text-sm ${plan.highlighted ? 'text-primary-100' : 'text-gray-500'}`}>{plan.desc}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? 'text-primary-200' : 'text-accent-green'}`} />
                      <span className={plan.highlighted ? 'text-primary-50' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full py-2.5 rounded-xl text-sm font-medium transition-all ${
                  plan.highlighted
                    ? 'bg-white text-primary-700 hover:bg-primary-50'
                    : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Loved by club administrators</h2>
            <p className="mt-4 text-lg text-gray-500">See what our users have to say about Phoenix Court Hub.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently asked questions</h2>
            <p className="mt-4 text-lg text-gray-500">Everything you need to know about Phoenix Court Hub.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left"
                >
                  <span className="text-sm font-medium text-gray-900">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Modernize Your Club?</h2>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Join hundreds of badminton clubs already using Phoenix Court Hub to streamline their operations.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard" className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 text-base font-medium rounded-xl hover:bg-primary-50 transition-all shadow-lg w-full sm:w-auto">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 text-white text-base font-medium rounded-xl hover:bg-primary-400 transition-all w-full sm:w-auto border border-primary-400">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                    <path d="M12 2L15 8L21 10L15 12L12 18L9 12L3 10L9 8L12 2Z" />
                  </svg>
                </div>
                <span className="text-base font-bold text-white">Phoenix Court Hub</span>
              </div>
              <p className="text-sm leading-relaxed">The complete badminton club management platform for modern clubs.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">&copy; 2026 Phoenix Court Hub. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors text-sm">Twitter</a>
              <a href="#" className="hover:text-white transition-colors text-sm">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors text-sm">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
