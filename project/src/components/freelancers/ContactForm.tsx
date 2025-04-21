import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Card, { CardHeader, CardContent } from '../common/Card';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import Button from '../common/Button';

interface ContactFormProps {
  freelancerName: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm({ freelancerName }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 1000);
    }
  };
  
  if (isSubmitted) {
    return (
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold text-gray-900">Message Sent!</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center p-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Mail className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <p className="text-center text-gray-700">
            Your message has been sent to {freelancerName}. They will get back to you soon!
          </p>
          <Button 
            variant="outline" 
            fullWidth 
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold text-gray-900">Contact {freelancerName}</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Your Name"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          
          <Input
            label="Your Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          
          <Input
            label="Subject"
            id="subject"
            name="subject"
            placeholder="Enter message subject"
            value={formData.subject}
            onChange={handleChange}
            error={errors.subject}
          />
          
          <TextArea
            label="Message"
            id="message"
            name="message"
            placeholder="Describe your project needs and timeline..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
          
          <Button 
            type="submit" 
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}