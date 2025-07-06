'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Star, User, Heart, Shield, X, Brain, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });

  const [consultationData, setConsultationData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    concerns: '',
    agreeToContact: false
  });

  const [errors, setErrors] = useState({});
  const [consultationErrors, setConsultationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConsultationSubmitting, setIsConsultationSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isApproachModalOpen, setIsApproachModalOpen] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Please tell us what brings you here';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Please specify your preferred time';
    if (!formData.agreeToContact) newErrors.agreeToContact = 'Please agree to be contacted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateConsultationForm = () => {
    const newErrors = {};
    
    if (!consultationData.name.trim()) newErrors.name = 'Name is required';
    if (!consultationData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!consultationData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(consultationData.email)) newErrors.email = 'Please enter a valid email';
    if (!consultationData.preferredTime.trim()) newErrors.preferredTime = 'Please specify your preferred time';
    if (!consultationData.concerns.trim()) newErrors.concerns = 'Please tell us about your concerns';
    if (!consultationData.agreeToContact) newErrors.agreeToContact = 'Please agree to be contacted';

    setConsultationErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    if (!validateConsultationForm()) return;

    setIsConsultationSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setConsultationSubmitted(true);
    setIsConsultationSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleConsultationInputChange = (field, value) => {
    setConsultationData(prev => ({ ...prev, [field]: value }));
    if (consultationErrors[field]) {
      setConsultationErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Dr. Serena Blake</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#faq" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">FAQ</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                <Dialog open={isConsultationModalOpen} onOpenChange={setIsConsultationModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 text-sm font-medium rounded-full">
                      Book Consultation
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-blue-600/5"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Licensed Clinical Psychologist • Los Angeles, CA
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Compassionate Care for
            <span className="block text-teal-600 font-normal"> Your Mental Health</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Evidence-based therapy to help you overcome anxiety, strengthen relationships, 
            and heal from trauma in a safe, supportive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog open={isConsultationModalOpen} onOpenChange={setIsConsultationModalOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book a Free Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold text-gray-900 mb-2">
                    Book Your Free Consultation
                  </DialogTitle>
                  <p className="text-gray-600">
                    Take the first step towards healing. I'll reach out within 24 hours to schedule your complimentary consultation.
                  </p>
                </DialogHeader>
                
                {consultationSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-teal-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      I've received your consultation request and will contact you within 24 hours to schedule your free session.
                    </p>
                    <Button 
                      onClick={() => {
                        setIsConsultationModalOpen(false);
                        setConsultationSubmitted(false);
                        setConsultationData({
                          name: '',
                          phone: '',
                          email: '',
                          preferredTime: '',
                          concerns: '',
                          agreeToContact: false
                        });
                      }}
                      className="mt-4 bg-teal-600 hover:bg-teal-700"
                    >
                      Close
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleConsultationSubmit} className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="consultation-name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="consultation-name"
                        type="text"
                        value={consultationData.name}
                        onChange={(e) => handleConsultationInputChange('name', e.target.value)}
                        className={`mt-1 ${consultationErrors.name ? 'border-red-500' : ''}`}
                        placeholder="Your full name"
                      />
                      {consultationErrors.name && <p className="mt-1 text-sm text-red-600">{consultationErrors.name}</p>}
                    </div>

                    <div>
                      <Label htmlFor="consultation-phone" className="text-sm font-medium text-gray-700">
                        Phone Number *
                      </Label>
                      <Input
                        id="consultation-phone"
                        type="tel"
                        value={consultationData.phone}
                        onChange={(e) => handleConsultationInputChange('phone', e.target.value)}
                        className={`mt-1 ${consultationErrors.phone ? 'border-red-500' : ''}`}
                        placeholder="(555) 123-4567"
                      />
                      {consultationErrors.phone && <p className="mt-1 text-sm text-red-600">{consultationErrors.phone}</p>}
                    </div>

                    <div>
                      <Label htmlFor="consultation-email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="consultation-email"
                        type="email"
                        value={consultationData.email}
                        onChange={(e) => handleConsultationInputChange('email', e.target.value)}
                        className={`mt-1 ${consultationErrors.email ? 'border-red-500' : ''}`}
                        placeholder="your@email.com"
                      />
                      {consultationErrors.email && <p className="mt-1 text-sm text-red-600">{consultationErrors.email}</p>}
                    </div>

                    <div>
                      <Label htmlFor="consultation-time" className="text-sm font-medium text-gray-700">
                        Preferred Time to Call *
                      </Label>
                      <Input
                        id="consultation-time"
                        type="text"
                        value={consultationData.preferredTime}
                        onChange={(e) => handleConsultationInputChange('preferredTime', e.target.value)}
                        className={`mt-1 ${consultationErrors.preferredTime ? 'border-red-500' : ''}`}
                        placeholder="e.g., weekday mornings, evening calls"
                      />
                      {consultationErrors.preferredTime && <p className="mt-1 text-sm text-red-600">{consultationErrors.preferredTime}</p>}
                    </div>

                    <div>
                      <Label htmlFor="consultation-concerns" className="text-sm font-medium text-gray-700">
                        What would you like to discuss? *
                      </Label>
                      <Textarea
                        id="consultation-concerns"
                        value={consultationData.concerns}
                        onChange={(e) => handleConsultationInputChange('concerns', e.target.value)}
                        className={`mt-1 ${consultationErrors.concerns ? 'border-red-500' : ''}`}
                        rows={3}
                        placeholder="Brief description of what brings you here..."
                      />
                      {consultationErrors.concerns && <p className="mt-1 text-sm text-red-600">{consultationErrors.concerns}</p>}
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consultation-agree"
                        checked={consultationData.agreeToContact}
                        onCheckedChange={(checked) => handleConsultationInputChange('agreeToContact', checked)}
                        className={consultationErrors.agreeToContact ? 'border-red-500' : ''}
                      />
                      <Label htmlFor="consultation-agree" className="text-sm text-gray-700 leading-5">
                        I agree to be contacted by Dr. Serena Blake regarding my consultation request *
                      </Label>
                    </div>
                    {consultationErrors.agreeToContact && <p className="text-sm text-red-600">{consultationErrors.agreeToContact}</p>}

                    <Button 
                      type="submit" 
                      disabled={isConsultationSubmitting}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition-colors mt-6"
                    >
                      {isConsultationSubmitting ? 'Scheduling...' : 'Schedule Free Consultation'}
                    </Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
            
            <Dialog open={isApproachModalOpen} onOpenChange={setIsApproachModalOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-full transition-all duration-300"
                >
                  Learn More About My Approach
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-semibold text-gray-900 mb-4">
                    My Therapeutic Approach
                  </DialogTitle>
                  <p className="text-gray-600 text-lg">
                    Evidence-based methods combined with compassionate, personalized care
                  </p>
                </DialogHeader>
                
                <div className="space-y-8 mt-6">
                  {/* Core Philosophy */}
                  <div className="bg-teal-50 p-6 rounded-2xl">
                    <div className="flex items-center mb-4">
                      <div className="bg-teal-100 p-3 rounded-full mr-4">
                        <Heart className="w-6 h-6 text-teal-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Core Philosophy</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      I believe that healing happens within the context of a safe, trusting relationship. 
                      My approach is collaborative—we work together to understand your unique experiences 
                      and develop strategies that feel authentic and sustainable for you.
                    </p>
                  </div>

                  {/* Therapeutic Methods */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Evidence-Based Methods I Use</h3>
                    <div className="grid gap-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                          <Brain className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Cognitive Behavioral Therapy (CBT)</h4>
                          <p className="text-gray-600">
                            Helps identify and change negative thought patterns and behaviors that contribute 
                            to anxiety, depression, and other challenges.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                          <Lightbulb className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Mindfulness-Based Interventions</h4>
                          <p className="text-gray-600">
                            Incorporates mindfulness and meditation techniques to help you stay present, 
                            manage stress, and develop emotional regulation skills.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                          <Shield className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Trauma-Informed Care</h4>
                          <p className="text-gray-600">
                            A gentle, safety-focused approach that recognizes the impact of trauma and 
                            prioritizes your sense of control and empowerment in the healing process.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                          <Users className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Emotionally Focused Therapy (EFT)</h4>
                          <p className="text-gray-600">
                            For couples and relationship work, focusing on attachment patterns and 
                            emotional connection to strengthen bonds and improve communication.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What to Expect */}
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect in Our Sessions</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          <strong>Initial sessions:</strong> We'll explore your concerns, goals, and develop a personalized treatment plan together.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          <strong>Ongoing work:</strong> We'll use evidence-based techniques while honoring your pace and preferences.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          <strong>Regular check-ins:</strong> We'll assess progress and adjust our approach as needed to ensure you're getting the most from therapy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center pt-4">
                    <p className="text-gray-600 mb-6">
                      Ready to start your healing journey with a personalized, evidence-based approach?
                    </p>
                    <Button 
                      onClick={() => {
                        setIsApproachModalOpen(false);
                        setIsConsultationModalOpen(true);
                      }}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold"
                    >
                      Schedule Your Free Consultation
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                About Dr. Blake
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                Compassionate Care Rooted in 
                <span className="text-teal-600"> Evidence-Based Practice</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                  with eight years of experience and over 500 client sessions. She blends evidence-based 
                  approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                  personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
                </p>
                <p>
                  Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                  Dr. Blake is committed to creating a safe, supportive space for you to thrive. 
                  Her approach combines clinical expertise with genuine empathy, ensuring each client 
                  receives the individualized attention they deserve.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8 mt-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                    <Star className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">8 Years Experience</p>
                    <p className="text-gray-600">Licensed Clinical Psychologist (PsyD)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">500+ Sessions</p>
                    <p className="text-gray-600">Helping clients heal and grow</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" 
                    alt="Dr. Serena Blake" 
                    className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-teal-600 p-2 rounded-full">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Trusted by 500+ clients</p>
                      <p className="text-sm text-gray-600">Compassionate, effective care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              My Services
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Specialized Therapeutic 
              <span className="text-teal-600"> Approaches</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored therapeutic interventions designed to meet your unique needs and support your journey toward healing and growth.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80" 
                    alt="Anxiety and Stress Management" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <CardTitle className="text-2xl font-semibold text-gray-900 mb-4">Anxiety & Stress Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Learn effective coping strategies and mindfulness techniques to manage overwhelming 
                  anxiety and stress. Develop resilience and reclaim control over your daily life 
                  through evidence-based therapeutic approaches including CBT and mindfulness-based interventions.
                </p>
                <div className="flex items-center text-teal-600 font-medium">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-teal-100 to-teal-200 rounded-t-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=800&q=80" 
                    alt="Relationship Counseling" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <CardTitle className="text-2xl font-semibold text-gray-900 mb-4">Relationship Counseling</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Strengthen communication patterns and rebuild trust in your relationships. 
                  Whether working individually or with couples, we'll explore healthy relationship 
                  dynamics and develop skills for lasting connection and emotional intimacy.
                </p>
                <div className="flex items-center text-teal-600 font-medium">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80" 
                    alt="Trauma Recovery" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <CardTitle className="text-2xl font-semibold text-gray-900 mb-4">Trauma Recovery</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Heal from past traumatic experiences in a safe, supportive environment. 
                  Using trauma-informed approaches, we'll work together to process difficult 
                  experiences and develop healthy coping mechanisms for your recovery journey.
                </p>
                <div className="flex items-center text-teal-600 font-medium">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-20">
            <div className="bg-white rounded-3xl p-12 shadow-xl max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">Session Information</h3>
                <p className="text-gray-600 text-lg">Transparent pricing for quality mental health care</p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-center">
                  <div className="bg-teal-50 p-8 rounded-2xl">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Individual Sessions</h4>
                    <p className="text-5xl font-bold text-teal-600 mb-2">$200</p>
                    <p className="text-gray-600 mb-4">50-minute session</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Personalized treatment approach</li>
                      <li>• Evidence-based interventions</li>
                      <li>• Flexible scheduling options</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-50 p-8 rounded-2xl">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Couples Sessions</h4>
                    <p className="text-5xl font-bold text-blue-600 mb-2">$240</p>
                    <p className="text-gray-600 mb-4">80-minute session</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Relationship-focused therapy</li>
                      <li>• Communication skill building</li>
                      <li>• Extended session time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Frequently Asked 
              <span className="text-teal-600"> Questions</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Common questions about therapy sessions and my practice
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="insurance" className="border border-gray-200 rounded-2xl px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-teal-600 transition-colors py-6 hover:no-underline">
                Do you accept insurance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                No, I do not accept insurance directly. However, I provide a superbill for each session 
                that you can submit to your insurance company for potential reimbursement. Many clients 
                find this approach gives them more flexibility in their treatment while still receiving 
                some financial support from their insurance provider. I'm happy to discuss how this works during our consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="online" className="border border-gray-200 rounded-2xl px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-teal-600 transition-colors py-6 hover:no-underline">
                Are online sessions available?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                Yes! I offer virtual therapy sessions via Zoom on Mondays, Wednesdays, and Fridays 
                from 1 PM to 5 PM. Online sessions provide the same quality of care as in-person 
                sessions and can be more convenient for those with busy schedules or transportation 
                challenges. All you need is a private space and a reliable internet connection. I use secure, HIPAA-compliant video conferencing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cancellation" className="border border-gray-200 rounded-2xl px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-teal-600 transition-colors py-6 hover:no-underline">
                What is your cancellation policy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                I require 24-hour notice for session cancellations. This policy ensures that I can 
                potentially offer your time slot to another client who may need it. Cancellations 
                made with less than 24 hours notice will be charged the full session fee, unless 
                there are emergency circumstances. I understand that life happens, and I'm always 
                willing to work with you to find solutions that work for both of us.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="approach" className="border border-gray-200 rounded-2xl px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-teal-600 transition-colors py-6 hover:no-underline">
                What therapeutic approaches do you use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                I use evidence-based approaches tailored to each client's unique needs. My primary methods include 
                Cognitive Behavioral Therapy (CBT), mindfulness-based interventions, and trauma-informed care. 
                I believe in integrating different therapeutic modalities to create a personalized treatment plan 
                that resonates with you and supports your specific goals for healing and growth.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Ready to Take the 
              <span className="text-teal-600"> First Step?</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm here to help you on your journey to healing and personal growth.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-12">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-teal-100 p-4 rounded-2xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">Office Location</h4>
                    <p className="text-gray-600 leading-relaxed">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 p-4 rounded-2xl flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">Phone</h4>
                    <p className="text-gray-600">(323) 555-0192</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-purple-100 p-4 rounded-2xl flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">Email</h4>
                    <p className="text-gray-600">serena@blakepsychology.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-green-100 p-4 rounded-2xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">Office Hours</h4>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM<br />
                      <strong>Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-teal-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    I've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`${errors.name ? 'border-red-500' : 'border-gray-200'} h-12 rounded-xl`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`${errors.phone ? 'border-red-500' : 'border-gray-200'} h-12 rounded-xl`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`${errors.email ? 'border-red-500' : 'border-gray-200'} h-12 rounded-xl`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                      What brings you here? *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-xl`}
                      rows={4}
                      placeholder="Tell me a bit about what you're looking for help with..."
                    />
                    {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="preferredTime" className="text-sm font-medium text-gray-700 mb-2 block">
                      Preferred time to reach you *
                    </Label>
                    <Input
                      id="preferredTime"
                      type="text"
                      value={formData.preferredTime}
                      onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                      className={`${errors.preferredTime ? 'border-red-500' : 'border-gray-200'} h-12 rounded-xl`}
                      placeholder="e.g., weekday afternoons, evening calls"
                    />
                    {errors.preferredTime && <p className="mt-2 text-sm text-red-600">{errors.preferredTime}</p>}
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToContact"
                      checked={formData.agreeToContact}
                      onCheckedChange={(checked) => handleInputChange('agreeToContact', checked)}
                      className={errors.agreeToContact ? 'border-red-500' : ''}
                    />
                    <Label htmlFor="agreeToContact" className="text-sm text-gray-700 leading-6">
                      I agree to be contacted by Dr. Serena Blake regarding my inquiry *
                    </Label>
                  </div>
                  {errors.agreeToContact && <p className="text-sm text-red-600 mt-2">{errors.agreeToContact}</p>}

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-xl font-semibold text-lg transition-colors mt-8"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Dr. Serena Blake</h3>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Licensed Clinical Psychologist (PsyD)<br />
                Compassionate, evidence-based therapy for anxiety, relationships, and trauma recovery.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <p>(323) 555-0192</p>
                <p>serena@blakepsychology.com</p>
                <p className="leading-relaxed">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dr. Serena Blake Psychology. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </main>
  );
}