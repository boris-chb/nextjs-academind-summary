import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const addMeetupHandler = meetupData => {
    console.log(meetupData);
    e.preventDefault();
  };

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
