import { usePersistentState } from '../../utils/usePersistentState';
import styles from './ViewEvent.module.scss'
import coverImage from '../../static/images/event/cover.png';
import goingImage from '../../static/images/event/going.png';
import maybeImage from '../../static/images/event/maybe.png';
import notImage from '../../static/images/event/not.png';
import inviteFriendImage from '../../static/images/event/invite.png';
import dotMenuImage from '../../static/images/event/settings.png';
import detailsButtonImage from '../../static/images/event/details.png';
import postsImage from '../../static/images/event/posts.png';

function ViewEvent() {
  const [details, setDetails] = usePersistentState("event", {});

  return (
    <>
    <div className={styles.header}>
        <img className={styles.coverImage} src={coverImage} alt="CoverImage" />
    </div>
    <div className={styles.titleContent}>
      <h1 className={styles.mainTitle}>{details.eventName}</h1>
      <h2 className={styles.subTitle}>Hosted by {details.hostName}</h2>
    </div>
    <div className={styles.buttonFirstSet}>
        <img className={styles.goingImage} src={goingImage} alt="GoingImage" />
        <img className={styles.maybeImage} src={maybeImage} alt="MaybeImage" />
        <img className={styles.notImage} src={notImage} alt="NotImage" />
    </div>
    <div className={styles.buttonSecondSet}>
        <img className={styles.inviteFriend} src={inviteFriendImage} alt="InviteFriend" />
        <img className={styles.dotMenu} src={dotMenuImage} alt="DotMenu" />
    </div>
    <div className={styles.detailsContent}>
      <h1 className={styles.startDate}>Start Date{details.startDate}</h1>
      <h2 className={styles.endDate}>to End Date {details.endDate}</h2>
      <h3 className={styles.addToCalendar}>Add to calendar</h3>
    </div>
    <div className={styles.locationContent}>
      <h1 className={styles.location}>Location{details.location}</h1>
      <h2 className={styles.openInMaps}>Open in Maps</h2>
    </div>
    <div className={styles.buttonThirdSet}>
        <img className={styles.details} src={detailsButtonImage} alt="Details" />
        <img className={styles.posts} src={postsImage} alt="Posts" />
    </div>
    </>
  );
}

export default ViewEvent;