const myphoto = '/images/toni-photo.webp';
const myavatar = '/images/toni-avatar-sm.png';

interface AvatarProps {
    animate?: boolean;
    type?: AvatarType;
    class?: string;
}

type AvatarType = 'avatar' | 'photo';

const Avatar = ({ animate = true, type = 'photo', class: customClass = '' }: AvatarProps) => {
    return (
        <div className={`image-wrapper ${animate ? 'animate-float' : ''} ${customClass}`}>
            <img src={type === 'avatar' ? myavatar : myphoto} alt='Avatar' className='w-full h-full object-cover rounded-full glow-accent opacity-95 dark:opacity-90' />
        </div>
    );
};
export default Avatar;