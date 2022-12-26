import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {
  useDatabaseUpdateMutation,
  useDatabaseValue
} from '@react-query-firebase/database'
import { ref } from 'firebase/database'
import { database } from '../config/firebase'

export default function ModalAddData({ modalOpen, modalClose }) {
  const FORM_INITIAL_STATE = {
    name: '',
    roomId: ''
  }
  const [form, setForm] = useState(FORM_INITIAL_STATE)
  const { data } = useDatabaseValue(['userId'], ref(database, 'userId'))
  const mutation = useDatabaseUpdateMutation(
    ref(database, `userId/${form.roomId - 1}`)
  )

  const addDataHandle = () => {
    mutation.mutate({
      nama: form.name,
      nilai: { '-aaaaaaaaaaa': { beat: 0, spo2: 0, temp: 0, timestamp: 0 } }
    })
  }

  const changeHandle = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  const submitSuccess = (e) => {
    changeHandle(e)
    addDataHandle()
    modalClose()
    setForm(FORM_INITIAL_STATE)
  }
  const submitHandle = (e) => {
    e.preventDefault()
    submitSuccess(e)
  }
  return (
    <>
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={modalClose}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto font-hanken'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-center text-xl font-medium leading-6 text-primary-content'>
                    Add new patient
                  </Dialog.Title>
                  <div className='mt-2'>
                    <form onSubmit={submitHandle}>
                      <div className='form-control space-y-5'>
                        <label className='label'>
                          <span className='label-text text-primary-content'>
                            Room Number :
                          </span>
                        </label>
                        <input
                          type='number'
                          id='roomId'
                          min={1}
                          max={12}
                          placeholder='Put between 1 - 12'
                          value={form.roomId}
                          required
                          onChange={changeHandle}
                          className='input-primary input w-full'
                        />
                        <label className='label'>
                          <span className='label-text text-primary-content'>
                            Patient's name :
                          </span>
                        </label>
                        <input
                          type='text'
                          id='name'
                          placeholder='Max. Character ( 35 )'
                          required
                          maxLength={35}
                          value={form.name}
                          onChange={changeHandle}
                          className='input-primary input w-full'
                        />
                        <button type='submit' className='btn-primary btn'>
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
