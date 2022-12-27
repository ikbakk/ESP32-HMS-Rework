import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useDatabaseUpdateMutation } from '@react-query-firebase/database'
import { ref } from 'firebase/database'
import { database } from '../config/firebase'

export default function ModalEditName({ modalOpen, modalClose, id }) {
  const [name, setName] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const dbRef = ref(database, `userId/${id}`)
  const mutation = useDatabaseUpdateMutation(dbRef)

  const editNode = () => {
    mutation.mutate({
      nama: name
    })
  }

  console.log(modalOpen)
  const submitHandle = (e) => {
    e.preventDefault()
    editNode()
    setName('')
  }
  return (
    <>
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setIsOpen(false)}>
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
                    Edit name
                  </Dialog.Title>
                  <div className='mt-2'>
                    <form onSubmit={submitHandle}>
                      <div className='form-control space-y-5'>
                        <label className='label'>
                          <span className='label-text text-primary-content'>
                            Patient's name :
                          </span>
                        </label>
                        <input
                          type='text'
                          placeholder='Max. Character ( 35 )'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className='input-primary input w-full'
                        />
                        <button
                          onClick={modalClose}
                          type='submit'
                          className='btn-primary btn'>
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
