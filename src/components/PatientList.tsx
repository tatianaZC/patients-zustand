import { usePatientStore } from "../store"
import PatientDetail from "./PatientDetail"

export default function PatientList() {

  const patients = usePatientStore((state) => state.patients)

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient list</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your {''}
            <span className="text-indigo-600 font-bold">Patients and Appointments</span>
          </p>
          {patients.map( patient => (
            <PatientDetail
              key={patient.id}
              patient={patient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">There are not patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start adding patients {''}
            <span className="text-indigo-600 font-bold">and they will appear in this place</span>
          </p>
        </>
      )}
    </div>
  )
}
