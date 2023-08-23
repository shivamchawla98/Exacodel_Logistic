import UserProfile from './UserProfile';

interface UserProps {
    
}

const User:React.FC<UserProps> = ({}) => {

  return (
    <>
            <div className="xl:px-44">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                <UserProfile />
            </div>
          </div>
    </>
  )

}

export default User;