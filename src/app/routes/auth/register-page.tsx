import AuthLayout from '@components/layouts/auth-layout'
import RegisterForm from '@features/auth/components/RegisterForm'

function RegisterRoute(){
    return (
        <AuthLayout title='register'>
            <section className='flex flex-col md:flex-row gap-3'>
                <div>
                    
                </div>
                <RegisterForm/>
            </section>
        </AuthLayout>
    )
}

export default RegisterRoute