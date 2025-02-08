import { Box, Modal } from '@mui/material'
import React from 'react'

const ContactModal = ({ open, close }) => {
    return (
        <>
            {
                open && <div>
                    <Modal open={open} onClose={close}>
                        <Box className="w-[350px] md:w-[450px]" sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            borderRadius: 2,
                        }}>
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Any questions?</h2>
                                <p className="text-gray-600 mb-6 text-center md:text-left">
                                 If you have any questions, feel free to leave a message. We will get back to you soon!
                                </p>
                                <form>
                                    <div className="mb-4">
                                        <input
                                            required
                                            type="text"
                                            placeholder="Name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            required
                                            type="number"
                                            placeholder="Phone number"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                                    >
                                        Sent
                                    </button>
                                </form>
                            </div>
                        </Box>
                    </Modal>
                </div>
            }
        </>
    )
}

export default ContactModal
