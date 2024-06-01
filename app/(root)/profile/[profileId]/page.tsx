const ProfilePage = ({ params }: { params: { profileId: string } }) => {
  return <p className="text-white-1"> ProfilePage for {params.profileId}</p>;
};

export default ProfilePage;
