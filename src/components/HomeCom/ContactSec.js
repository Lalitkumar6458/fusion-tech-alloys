'use client'
import React, { useState } from 'react';
import { FaUser, FaPhoneAlt, FaPencil } from 'react-icons/fa';
import { MdEmail, MdLocationOn,MdEdit  } from 'react-icons/md';
import emailjs from '@emailjs/browser';
export const ContactData = {
    name: 'Fusion tech alloys',
    address: ['Office No.103, 1st Floor, Lakdawala Sapphire, Plot CS No.3942 21-23, Ram Mandir Rd, 4Th Kumbharwada, Girgaon, Mumbai, Maharashtra 400004.'],
    email: ['info@fusiontechalloys.com', 'sales@fusiontechalloys.com'],
    phone: ['9137130839', '9875782537', '022-66518806'],
    SocialLink: [
        {
            name: 'Facebook',
            link: 'https://www.facebook.com',
            icon: <FaUser />
        },
        {
            name: 'Twitter',
            link: 'https://www.twitter.com',
            icon: <FaUser />
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com',
            icon: <FaUser />
        }
    ]
};

const ContactSec = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.phone) formErrors.phone = 'Phone number is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.message) formErrors.message = 'Message is required';
        return formErrors;
    };

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            setLoading(true);
            // Perform submission logic (e.g., send data to server)
          
            // Clear the form
            setFormData({ name: '', phone: '', email: '', message: '' });
            setLoading(false);
        } else {
            setErrors(formErrors);
        }

        console.log(formData)
        emailjs.send('service_5ispfhb', 'template_jgyydac', formData, 'JJN-gcFG_3Ehb9gis')
        .then(response => {
          alert('Sent Message Successfully to Fusion tech alloys!')
            setFormData({ name: '', phone: '', email: '', message: '' });
            setLoading(false)
        }, error => {
          alert(error.text)
          console.log(error)
          setLoading(false)
        });

  
    };

    const data = [
        {
            heading: 'Address',
            icon: <MdLocationOn />,
            list: ContactData.address,
            bgClr: 'bg-thmBase'
        },
        {
            heading: 'Phone',
            icon: <FaPhoneAlt />,
            list: ContactData.phone,
            bgClr: 'bg-thmBase'
        },
        {
            heading: 'Email',
            icon: <MdEmail />,
            list: ContactData.email,
            bgClr: 'bg-thmBase'
        }
    ];

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 py-[5%] px-[5%] gap-4 lg:gap-0'>
            <div className='lg:col-span-3 bg-white p-[20px] md:p-[30px] lg:p-[50px] shadow-md rounded-md lg:rounded-r-md border'>
                <div className='border-thmBase border-b-2 text-center pb-2'>
                    <h1 className='text-[1.7rem] font-Roboto font-medium'>GET A QUOTE</h1>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-3'>
                    <div className=''>
                        <div className='flex items-center w-full bg-[#080c240f] h-[40px] px-2 gap-2 rounded-md'>
                            <div className=''>
                                <FaUser className='text-gray-600' />
                            </div>
                            <input
                                className='flex-grow border-0 focus:outline-none bg-transparent'
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your Name'
                            />
                        </div>
                        {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                        <div className=''>
                            <div className='flex items-center w-full bg-[#080c240f] h-[40px] px-2 gap-2 rounded-md'>
                                <div className=''>
                                    <FaPhoneAlt className='text-gray-600' />
                                </div>
                                <input
                                    className='flex-grow border-0 focus:outline-none bg-transparent'
                                    type='text'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder='Phone Number'
                                />
                            </div>
                            {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                        </div>
                        <div className=''>
                            <div className='flex items-center w-full bg-[#080c240f] h-[40px] px-2 gap-2 rounded-md'>
                                <div className=''>
                                    <MdEmail className='text-gray-600' />
                                </div>
                                <input
                                    className='flex-grow border-0 focus:outline-none bg-transparent'
                                    type='text'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Your Email'
                                />
                            </div>
                            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex items-start w-full bg-[#080c240f] px-2 py-2 gap-2 rounded-md'>
                            <div className='mt-[5px]'>
                                <MdEdit className='text-gray-600' />
                            </div>
                            <textarea
                                className='flex-grow border-0 focus:outline-none bg-transparent h-[120px]'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Write Message'
                            />
                        </div>
                        {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='text-[1.3rem] font-Rubik font-medium py-2 px-6 bg-thmBase text-white rounded-md'>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
            <div className='lg:col-span-2 bg-thmBlack p-[20px] md:p-[30px] lg:p-[50px] rounded-md lg:rounded-r-md'>
                <div className='border-b-2 border-white text-center pb-2'>
                    <h2 className='text-[1.4rem] md:text-[1.7rem] font-Roboto font-medium text-white'>CONTACT INFORMATION</h2>
                </div>
                <div className='mt-3'>
                    {data.map((item, i) => (
                        <div key={i} className='bg-white rounded-md mt-2 p-3'>
                            <h1 className='text-[1.3rem] font-Roboto font-medium text-gray-700 mb-1'>{item.heading}</h1>
                            <div className='flex items-start gap-2'>
                                <div className={`rounded-md text-white text-[1.4rem] ${item.bgClr}`}>
                                    <div className='w-[50px] h-[50px] flex items-center justify-center'>
                                        {item.icon}
                                    </div>
                                </div>
                                <div className='flex flex-col text-[1.4rem]  md:text-[1.2rem] font-Roboto text-gray-600'>
                                    {item.list.map((each, index) => (
                                        <p key={index}>{each}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactSec;
