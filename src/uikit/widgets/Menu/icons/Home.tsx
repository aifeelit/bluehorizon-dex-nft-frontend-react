import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M16.5983 0.023088C16.3286 0.0346235 16.1153 0.271376 16.1298 0.540171C16.2032 1.90758 16.4764 2.83976 16.5066 2.939C16.5075 2.9423 16.5084 2.94541 16.5095 2.94853C16.6036 3.24405 16.4374 3.56705 16.1426 3.6619C15.8573 3.75381 15.5191 3.58023 15.4276 3.29459C15.3928 3.18583 15.0852 2.1881 14.9954 0.668893C14.9788 0.388745 14.7197 0.17488 14.4414 0.212233C13.1115 0.390027 11.8283 0.683907 10.6277 1.08582C10.4179 1.15595 10.2805 1.35919 10.2937 1.58001C10.4316 3.89004 11.1695 5.47278 11.2017 5.5409C11.3345 5.82123 11.2149 6.16455 10.9353 6.29858C10.6566 6.43206 10.3115 6.3103 10.1778 6.03253C10.1483 5.97083 9.45365 4.49776 9.21452 2.3311C9.17808 2.00115 8.81444 1.799 8.51488 1.94347C7.59167 2.38951 6.71406 2.91685 5.90658 3.51084C5.67111 3.68387 5.43692 3.86551 5.2106 4.05099C5.05753 4.17605 4.99491 4.37966 5.05057 4.56917C5.8337 7.23057 7.30201 8.8569 7.36554 8.92629C7.57446 9.15462 7.56219 9.51826 7.33423 9.72865C7.10773 9.93775 6.74079 9.92274 6.53151 9.69716C6.47676 9.63783 5.17893 8.22116 4.28245 5.85675C4.1552 5.52094 3.7055 5.4347 3.4627 5.69947C2.10225 7.18205 1.11495 8.79922 0.528474 10.5061C0.0502092 11.8968 -0.0992029 13.3697 0.10752 14.6534C0.135352 14.8262 0.284764 14.9493 0.454318 14.9491C0.472811 14.9491 0.491671 14.9476 0.510713 14.9445C0.702422 14.9138 0.832792 14.7332 0.801847 14.5415C0.613068 13.37 0.752226 12.018 1.1935 10.7346C1.71517 9.21651 2.57538 7.76963 3.75219 6.4295C4.67429 8.691 5.91921 10.07 6.01223 10.171C6.48353 10.6839 7.29981 10.7185 7.81158 10.245C8.31951 9.77516 8.35357 8.95833 7.88336 8.45004C7.86944 8.43484 6.51173 6.92717 5.76595 4.50582C5.94832 4.35915 6.13527 4.21542 6.32314 4.07736C7.01728 3.56668 7.76581 3.10746 8.55205 2.70958C8.82579 4.78835 9.46775 6.17755 9.54374 6.33648C9.84201 6.96105 10.6158 7.23149 11.2391 6.93248C11.8622 6.63366 12.1365 5.86298 11.8366 5.23841C11.8296 5.22358 11.1604 3.78274 11.0065 1.70104C12.0517 1.36175 13.1608 1.10633 14.3088 0.940434C14.4198 2.41771 14.7219 3.39695 14.7576 3.509C14.9662 4.16103 15.7064 4.54042 16.3577 4.33132C17.0156 4.1202 17.3903 3.39511 17.1799 2.73613C17.1519 2.64366 16.9285 1.87792 16.8455 0.717415C18.7789 0.652413 20.7826 0.811347 22.8083 1.19074C22.9216 1.79662 23.0165 2.4113 23.091 3.02158C23.1146 3.21421 23.29 3.35154 23.4826 3.32792C23.6754 3.3043 23.8126 3.12907 23.7892 2.93626C23.7029 2.23113 23.5901 1.51996 23.4539 0.822699C23.4264 0.682259 23.3167 0.57258 23.1763 0.545115C20.941 0.108231 18.7278 -0.0673649 16.5983 0.023088Z" />
      <path d="M23.5494 4.0112C23.3557 4.0253 23.2101 4.19375 23.2242 4.38747C23.2925 5.3246 23.3118 6.25403 23.2817 7.15361C22.1221 7.07048 21.3551 6.8471 21.2628 6.81908C20.6006 6.61895 19.8808 6.97893 19.6676 7.6414C19.4582 8.29306 19.8399 9.03262 20.4905 9.24135C20.6024 9.27724 21.5827 9.57918 23.0587 9.69014C22.8928 10.838 22.6374 11.9473 22.2979 12.9924C20.2159 12.8386 18.7759 12.1695 18.7627 12.1633C18.1349 11.8676 17.3671 12.1326 17.0667 12.7597C16.7678 13.3831 17.0421 14.1566 17.6636 14.4558C17.8216 14.5312 19.2103 15.1732 21.2896 15.4471C20.7895 16.4351 20.1875 17.3698 19.4935 18.233C17.0723 17.4874 15.5647 16.1299 15.5506 16.1172C15.0381 15.6503 14.2266 15.676 13.7545 16.1872C13.2938 16.686 13.3118 17.5297 13.8283 17.9869C13.9296 18.0801 15.308 19.3248 17.5698 20.2469C16.2295 21.4238 14.7826 22.284 13.2645 22.8056C9.56164 24.0789 7.13058 22.6707 6.17386 21.0777C6.01896 20.8199 5.88694 20.5383 5.77983 20.2382L8.06239 17.813C8.06239 17.813 10.7518 18.5553 10.7547 18.5562C11.2892 18.7036 11.8874 18.3628 12.0355 17.8293C12.1857 17.2886 11.849 16.6973 11.3088 16.5484L9.67663 16.0978L11.4557 14.2078L14.3141 14.9968C14.7916 15.1283 15.3233 14.884 15.5337 14.4351C15.5345 14.4334 15.5354 14.432 15.5361 14.4303C15.8126 13.8436 15.4541 13.1843 14.8681 12.9891L13.0699 12.4927L14.8487 10.6025C14.8487 10.6025 17.8729 11.4373 17.8734 11.4375C18.4143 11.5867 19.0033 11.2551 19.1542 10.7108C19.3031 10.1719 18.9702 9.57955 18.4275 9.42977L16.463 8.8876C16.463 8.8876 18.3361 6.89745 18.3363 6.89727C18.6545 6.55889 18.6492 6.01288 18.3178 5.68165C17.9955 5.35939 17.4362 5.34748 17.1042 5.66151C17.1035 5.66205 17.1029 5.6626 17.1022 5.66315L15.1119 7.53648C15.1119 7.53648 14.5699 5.5727 14.5697 5.57197C14.4214 5.03438 13.8259 4.69674 13.2887 4.84505C12.7352 4.99794 12.4091 5.57252 12.562 6.12604L13.3967 9.15072L11.5066 10.9296C11.5066 10.9296 11.0105 9.13241 11.0103 9.13131C10.8567 8.57541 10.2252 8.23868 9.67809 8.42014C9.16339 8.59079 8.85852 9.16299 9.00262 9.68556L9.79161 12.5438L7.90144 14.3228C7.90144 14.3228 7.45119 12.6912 7.45101 12.6905C7.30196 12.1505 6.71072 11.8151 6.17002 11.9639C5.62748 12.1131 5.29332 12.7026 5.44328 13.2447L6.18631 15.9371L3.76111 18.2196C3.46101 18.1127 3.17921 17.9805 2.92159 17.8258C2.12289 17.346 1.53037 16.6649 1.1605 15.8014C1.08415 15.6229 0.877424 15.5401 0.698899 15.6165C0.520373 15.693 0.437611 15.8997 0.514148 16.0782C0.943341 17.0804 1.63144 17.8712 2.55941 18.4286C2.75991 18.549 2.97286 18.6569 3.19533 18.7521C3.19533 18.7521 0.339651 21.4397 0.338918 21.4406C-0.100163 21.8537 -0.116093 22.5784 0.315115 23.0096C0.315115 23.0096 0.989483 23.684 0.990033 23.6845C1.41996 24.1145 2.1423 24.1035 2.55904 23.6607L5.24736 20.8043C5.34276 21.0268 5.45061 21.2395 5.5709 21.44C6.34305 22.7254 7.58742 23.5628 9.16943 23.8612C9.60137 23.9427 10.0555 23.983 10.5216 23.983C11.4884 23.983 12.5079 23.8098 13.4932 23.471C15.1999 22.8844 16.8171 21.8971 18.2999 20.5366C18.5648 20.2935 18.4778 19.8439 18.1426 19.7169C15.7776 18.82 14.3615 17.5226 14.3024 17.4678C14.2992 17.4649 14.2974 17.4632 14.2943 17.4605L14.2857 17.4519C14.0693 17.2356 14.0627 16.8899 14.2709 16.6649C14.4823 16.4362 14.8465 16.4241 15.0745 16.6351C15.1424 16.6971 16.7688 18.1656 19.4298 18.9486C19.6197 19.0046 19.8231 18.9418 19.9483 18.7887C20.7783 17.7749 21.4859 16.6642 22.0557 15.4844C22.2003 15.1849 21.9973 14.8211 21.668 14.7848C19.501 14.5455 18.0285 13.851 17.9677 13.822C17.6887 13.6878 17.5665 13.344 17.7008 13.064C17.8348 12.7846 18.1812 12.6645 18.4599 12.7983C18.526 12.8296 20.1054 13.5675 22.4193 13.7056C22.6401 13.7188 22.8434 13.5814 22.9135 13.3718C23.3154 12.171 23.6093 10.888 23.7871 9.55812C23.8243 9.27962 23.6104 9.02053 23.3303 9.00405C21.8123 8.91433 20.8133 8.60672 20.7049 8.57211C20.4171 8.47964 20.2448 8.14457 20.3373 7.85691C20.4317 7.56266 20.7558 7.39494 21.0506 7.48997C21.0526 7.49052 21.0561 7.49162 21.0581 7.49217C21.1599 7.52311 22.0934 7.79612 23.459 7.86955C23.7285 7.88419 23.9647 7.67051 23.9761 7.40098C24.0182 6.40728 24.0013 5.37641 23.9257 4.33675C23.9116 4.14267 23.7432 3.9971 23.5494 4.0112ZM2.04672 23.1784C1.89767 23.3368 1.64041 23.3403 1.48716 23.1869C1.48716 23.1869 0.813155 22.513 0.81224 22.5119C0.676744 22.3766 0.63939 22.0732 0.820662 21.9524C0.820662 21.9524 6.82095 16.3051 6.8226 16.3035C6.91616 16.2156 6.9548 16.0775 6.92056 15.9539C6.92056 15.9539 6.12205 13.0607 6.12113 13.0574C6.07242 12.8809 6.181 12.6901 6.35715 12.6416C6.53055 12.5936 6.72391 12.7 6.77298 12.8774C6.77298 12.8774 7.37795 15.0688 7.37868 15.0719C7.44789 15.3226 7.76924 15.4127 7.95875 15.2343C7.95875 15.2343 10.4262 12.9118 10.4279 12.9104C10.5209 12.8229 10.5599 12.6841 10.5259 12.5608C10.5259 12.5608 9.6812 9.50063 9.68047 9.49806C9.63176 9.32174 9.74035 9.13076 9.91649 9.08205C10.091 9.0339 10.2842 9.14339 10.3323 9.31807C10.3323 9.31807 10.9836 11.6772 10.984 11.6786C11.053 11.9289 11.3744 12.0196 11.5639 11.8412L14.033 9.51729C14.1264 9.42922 14.1652 9.29116 14.131 9.16756L13.2398 5.93872C13.1902 5.75892 13.296 5.57233 13.4758 5.52271C13.6478 5.47529 13.8473 5.58112 13.8917 5.75873C13.8917 5.75873 14.588 8.28171 14.5891 8.28556C14.6579 8.53513 14.9815 8.62466 15.1692 8.44797L17.5841 6.17511C17.6497 6.11359 17.7568 6.11505 17.8205 6.17859C17.8844 6.24249 17.8859 6.34942 17.8242 6.41497C17.8242 6.41497 15.5533 8.82772 15.5511 8.8301C15.3733 9.01888 15.4641 9.34115 15.7137 9.40999L18.2404 10.1074C18.4202 10.1571 18.526 10.3436 18.4764 10.5234C18.428 10.699 18.2356 10.8074 18.0605 10.7593L14.8315 9.86812C14.7059 9.83351 14.5713 9.87105 14.482 9.96608C14.482 9.96608 12.1586 12.4347 12.1579 12.4354C11.9799 12.6245 12.0703 12.9461 12.3204 13.0153C12.3204 13.0153 14.679 13.6662 14.681 13.6668C14.8751 13.7204 14.9813 13.9477 14.8993 14.1306C14.8328 14.2794 14.6583 14.362 14.501 14.3188L11.4383 13.4734C11.3127 13.4386 11.1781 13.4763 11.0887 13.5714C11.0887 13.5714 8.74445 16.0636 8.73566 16.0759C8.59467 16.271 8.69647 16.5567 8.92737 16.6204C8.92737 16.6204 11.1208 17.2259 11.1217 17.2261C11.2956 17.2741 11.4062 17.4656 11.3577 17.6421C11.3114 17.81 11.114 17.9355 10.9417 17.8781L8.04518 17.0785C7.91957 17.0439 7.78499 17.0816 7.69563 17.1765C7.69563 17.1765 2.05551 23.1691 2.04672 23.1784Z" />
    </Svg>
  )
}

export default Icon