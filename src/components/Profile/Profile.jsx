import PropTypes from 'prop-types';
import {ProfileWrapper, Description, Image, Name, Stats, StatsItem, StatsLabel, StatsQuantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileWrapper>
            <Description>
                <Image
                src={avatar}
                    alt="User avatar"
                    width="200"
                    />
                <Name>{ username}</Name>
                <p>@{tag}</p>
                <p>{location}</p>
            </Description>

        <Stats>
            <StatsItem>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{stats.followers}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Views</StatsLabel>
                <StatsQuantity>{stats.views}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Likes</StatsLabel>
                <StatsQuantity>{stats.likes}</StatsQuantity>
            </StatsItem>
        </Stats>
</ProfileWrapper>
    )
}

//  "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308