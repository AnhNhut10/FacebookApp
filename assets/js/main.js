const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let headerSearch = $('.header__search');
let logoBtn = $('.header__logo-btn');
let arrowBackBtn = $('.header__arrow-back-btn');
let searchInput = $('.header__search-input');
let searchIcon = $('.header__search-icon');
let searchHistory = $('.header__search-history');
let n = 0;

// Ham bat lich su tim kiem
function showSearchHistory () {
    headerSearch.classList.add('active');
    searchInput.classList.add('active');
    searchIcon.classList.add('active');
    searchHistory.classList.add('active');

    if (n == 0) {
        logoBtn.classList.toggle('active');
        arrowBackBtn.classList.toggle('active');
        n++;
    }

    activeSetting.classList.remove('active');
    userSettingNode.classList.remove('active');
    userHelpNode.classList.remove('active');
    userScreenNode.classList.remove('active');
    userKeyboardNode.classList.remove('active');
    activeSetting.classList.remove('trans');

    showUserNotifi.classList.remove('active');
    activeNotifi.classList.remove('active');

    showUserMessage.classList.remove('active');
    activeMessage.classList.remove('active');

    showUserMenu.classList.remove('active');
    activeMenu.classList.remove('active');
    showUserMenuCreate.classList.remove('active');
}

// Ham tat lich su tim kiem
function hideSearchHistory () {
    headerSearch.classList.remove('active');
    searchInput.classList.remove('active');
    searchIcon.classList.remove('active');
    searchHistory.classList.remove('active');
    
    if (n == 1) {
        logoBtn.classList.toggle('active');
        arrowBackBtn.classList.toggle('active');
        --n;
    }
}

headerSearch.addEventListener('click', showSearchHistory);
arrowBackBtn.addEventListener('click', hideSearchHistory);

// Show Message 
let userMessageNodeId = document.getElementById('header-user__message');
let showUserMessage = $('.user-message');
let activeMessage = $('.selection-message-js');

userMessageNodeId.onclick = function () {
    showUserMessage.classList.toggle('active');
    activeMessage.classList.toggle('active');
    notifiAboutMoreList.forEach((item) =>{
        item.classList.remove('active')
    });

    hideSearchHistory();

    activeSetting.classList.remove('active');
    userSettingNode.classList.remove('active');
    userHelpNode.classList.remove('active');
    userScreenNode.classList.remove('active');
    userKeyboardNode.classList.remove('active');
    activeSetting.classList.remove('trans');

    showUserNotifi.classList.remove('active');
    activeNotifi.classList.remove('active');

    showUserMenu.classList.remove('active');
    activeMenu.classList.remove('active');
    showUserMenuCreate.classList.remove('active');

    
}

// Show User Setting 
let userSettingNodeId = document.getElementById('user-setting-option');

function showTag (item1, item2) {
    item1.classList.add('active');
    item2.classList.add('trans');
 }
 
 function hideTag (item1, item2) {
     item1.classList.remove('active');
     item2.classList.remove('trans');
 }

userSettingNodeId.onclick = function (e) {
    activeSetting.classList.toggle('active');
    userSettingNode.classList.remove('active');
    userHelpNode.classList.remove('active');
    userScreenNode.classList.remove('active');
    userKeyboardNode.classList.remove('active');
    activeSetting.classList.remove('trans');

    hideSearchHistory();

    showUserNotifi.classList.remove('active');
    activeNotifi.classList.remove('active');

    showUserMessage.classList.remove('active');
    activeMessage.classList.remove('active');

    showUserMenu.classList.remove('active');
    activeMenu.classList.remove('active');
    showUserMenuCreate.classList.remove('active');
}

// Modal 

// User Feedback
let userFeedbackElement = $('.user-feedback-js');
let userFeedbackNode = $('.user-feedback');
let closeFeedbackBtn = $('.feedback__close-btn');
const userFeedbackContainer = $('.user-feedback-container');

userFeedbackElement.onclick = function (e) {
    userFeedbackNode.classList.add('active');
    activeSetting.classList.remove('active');
}

closeFeedbackBtn.onclick = function (e) {
    userFeedbackNode.classList.remove('active');
}

userFeedbackNode.onclick = () => {
    userFeedbackNode.classList.remove('active');
}

userFeedbackContainer.addEventListener('click', function (e) {
    e.stopPropagation();
})

// Setting & Security

let activeSetting = $('.selection-setting-js');
let settingSecurityNode = $('.setting-security-js');
let userSettingNode = $('.user-control-setting-js');
let backSettingBtn = $('.back-setting-js');
let itemSettingList = $$('.header-user__setting-item');

settingSecurityNode.onclick = function () {
    showTag(userSettingNode, activeSetting);
}

backSettingBtn.onclick = function () {
    hideTag(userSettingNode, activeSetting);
}

// Help & Support
let helpNode = $('.help-js');
let userHelpNode = $('.user-control-help-js');
let backHelpBtn = $('.back-help-js');
let itemHelpList = $$('.user-control__item');
let headerElementList = $$('.user-control__heading');


helpNode.onclick = function (e) {
    showTag(userHelpNode, activeSetting);
}

backHelpBtn.onclick = function (e) {
    hideTag(userHelpNode, activeSetting);
}

// Screen & Accessibility 
let screenNode = $('.screen-js');
let userScreenNode = $('.user-control-screen-js');
let backScreenBtn = $('.back-screen-js');
let keyboardNode = $('.user-screen-js');
let userKeyboardNode = $('.user-keyboad-js');
let backKeyboardBtn = $('.back-keyboard-js')

screenNode.onclick = function (e) {
   showTag(userScreenNode, activeSetting);
}

backScreenBtn.onclick = function (e) {
    hideTag(userScreenNode, activeSetting);
}

keyboardNode.onclick = function (e) {
    userKeyboardNode.classList.add('active');
    userScreenNode.classList.toggle('active');
}

backKeyboardBtn.onclick = function (e) {
    userKeyboardNode.classList.remove('active');
    userScreenNode.classList.toggle('active');
}

// Show Notification
let userNotifiId = document.getElementById('header-user__notifi');
let showUserNotifi = $('.user-notifi');
let notifiAboutBtn = $('.notifi-about-btn-js');
let notifiAboutList = $$('.user-notifi__about-btn');
let notifiFriendRequestList = $$('.user-notifi__friend-request');
let notifiItemList = $$('.user-notifi__main-item');
let notifiAboutMoreList = $$('.user-notifi__about-list');
let activeNotifi = $('.selection-notifi-js');

let allNotifiBtn = $('.all-notifi-btn');
let unreadNotifiBtn = $('.unread-notifi-btn');
let allNotifiText = $('.all-notifi-text');
let unreadNotifiText = $('.unread-notifi-text');
let showAllNotifi = $('.all-notifi-js');
let showUnreadNotifi = $('.unread-notifi-js');

allNotifiBtn.onclick = function () {
    allNotifiBtn.classList.add('active');
    allNotifiText.classList.add('active');
    showAllNotifi.classList.add('active');

    unreadNotifiBtn.classList.remove('active');
    unreadNotifiText.classList.remove('active');
    showUnreadNotifi.classList.remove('active');
}

unreadNotifiBtn.onclick = function () {
    unreadNotifiBtn.classList.add('active');
    unreadNotifiText.classList.add('active');
    showUnreadNotifi.classList.add('active');

    allNotifiBtn.classList.remove('active');
    allNotifiText.classList.remove('active');
    showAllNotifi.classList.remove('active');
}

userNotifiId.onclick = function () {
    activeNotifi.classList.toggle('active');
    showUserNotifi.classList.toggle('active');
    notifiAboutMoreList.forEach((item) =>{
        item.classList.remove('active')
    });

    hideSearchHistory();

    activeSetting.classList.remove('active');
    userSettingNode.classList.remove('active');
    userHelpNode.classList.remove('active');
    userScreenNode.classList.remove('active');
    userKeyboardNode.classList.remove('active');
    activeSetting.classList.remove('trans');

    showUserMessage.classList.remove('active');
    activeMessage.classList.remove('active');

    showUserMenu.classList.remove('active');
    activeMenu.classList.remove('active');
    showUserMenuCreate.classList.remove('active');
}

function turnOffHover (item) {
    item.onmouseover = function () {
        notifiItemList.forEach((e) =>
            e.classList.add('hover-off'))
    }
    item.onmouseout = function () {
        notifiItemList.forEach((e) =>
            e.classList.remove('hover-off'))
    }
}

// Bug khi click vào menu khác thì menu cũ chưa tắt => Tìm cách fix
notifiAboutList.forEach(function (item, index) {
    turnOffHover(item)
    item.onclick = function () {
        notifiAboutMoreList[index].classList.toggle('active')
    }
})

notifiFriendRequestList.forEach((item) =>
    turnOffHover(item));

notifiAboutMoreList.forEach(function (item) {
    turnOffHover(item)
})

// User Menu 
let userMenuNodeId = document.getElementById('header-user__menu');
let userMenuNode = $('.header-user__menu-all');
let userMenuCreateNode = $('.header-user__menu-create');

let showUserMenu = $('.user-menu');
let activeMenu = $('.selection-menu-js');

let showUserMenuCreate = $('.user-menu__create-form-list--full');

function showMenu () {
    activeMenu.classList.toggle('active');

    hideSearchHistory();

    activeSetting.classList.remove('active');
    userSettingNode.classList.remove('active');
    userHelpNode.classList.remove('active');
    userScreenNode.classList.remove('active');
    userKeyboardNode.classList.remove('active');
    activeSetting.classList.remove('trans');

    showUserNotifi.classList.remove('active');
    activeNotifi.classList.remove('active');

    showUserMessage.classList.remove('active');
    activeMessage.classList.remove('active');
}

userMenuNode.onclick = function () {
    showMenu();
    showUserMenu.classList.toggle('active');
}

userMenuCreateNode.onclick = function () {
    showMenu();
    showUserMenuCreate.classList.toggle('active');
}


// Turn off Pagination
let boxLevel1= $('.header-user__setting');
let boxListLevel2 = $$('.box-list-js');

function turnOffPagination (item) {
        item.stopPropagation();
}

boxLevel1.addEventListener('click', turnOffPagination);

boxListLevel2.forEach((item) =>
    item.addEventListener('click', turnOffPagination));

showUserNotifi.addEventListener('click', turnOffPagination);
showUserMessage.addEventListener('click', turnOffPagination);
showUserMenu.addEventListener('click', turnOffPagination);

// Header Menu 
let headerMenuBtn = $('.navbar-list__item-orther');
let showHeaderMenu = $('.navbar-orther-menu');

headerMenuBtn.onclick = () => {
    headerMenuBtn.classList.toggle('active');
    showHeaderMenu.classList.toggle('active');

    let showHeaderMenuMore = $('.navbar-orther-menu__menu-more-list');
    let headerMenuMoreShowBtn = $('.menu-item-more-show-btn');
    let headerMenuMoreHideBtn = $('.menu-item-more-hide-btn')
    showHeaderMenuMore.classList.remove('active');
    headerMenuMoreShowBtn.classList.remove('hide');

    headerMenuMoreShowBtn.onclick = () => {
        headerMenuMoreShowBtn.classList.add('hide');
        showHeaderMenuMore.classList.add('active');

        headerMenuMoreHideBtn.onclick = () => {
            headerMenuMoreShowBtn.classList.remove('hide');
            showHeaderMenuMore.classList.remove('active');
        }
    }
}


// Container 

let container = $('.container');
let private = $('.private');

function turnDisableHeaderShow() {
    hideSearchHistory();

    activeSetting.classList.remove('active');
    userSettingNode.classList.remove('active');
    userHelpNode.classList.remove('active');
    userScreenNode.classList.remove('active');
    userKeyboardNode.classList.remove('active');
    activeSetting.classList.remove('trans');

    showUserNotifi.classList.remove('active');
    activeNotifi.classList.remove('active');

    showUserMessage.classList.remove('active');
    activeMessage.classList.remove('active');

    showUserMenu.classList.remove('active');
    activeMenu.classList.remove('active');
    showUserMenuCreate.classList.remove('active');
}

container.addEventListener('click', turnDisableHeaderShow);
private.addEventListener('click', turnDisableHeaderShow);

// Background
let bgChangeBtn = $('.background-change-btn');
let showBgChange = $('.background-change__list');

bgChangeBtn.onclick = (e) => {
    showBgChange.classList.toggle('active');
    e.stopPropagation();
}

bgChangeBtn.onmousedown = () => {
    bgChangeBtn.classList.add('click-btn');
}

bgChangeBtn.onmouseup = () => {
    bgChangeBtn.classList.remove('click-btn');
}

// User 
let overlayImg = $('.overlay-img');
let userBtnList = $$('.user-header__control-item');
let avatarChangeBtn = $('.user-header__avatar');
let showAvatarChange = $('.avatar-change__list');
let avatarListChange = $('.user-header__avatar-change-btn');
let friendInfoList = $('.user-header__info-friend-list');
let moreContactBtn = $$('.more-contact-btn-js');
let showMoreContact = $$('.more-contact__list');

avatarChangeBtn.onclick = () => {
    showAvatarChange.classList.toggle('active');
}

function overlayImgOff () {
    overlayImg.classList.add('overlay-img--stop');
}

function overlayImgOn () {
    overlayImg.classList.remove('overlay-img--stop');
}

avatarListChange.addEventListener('mouseover', overlayImgOff);
avatarListChange.addEventListener('mouseout', overlayImgOn);
showAvatarChange.addEventListener('mouseover', overlayImgOff);
showAvatarChange.addEventListener('mouseout', overlayImgOn);

moreContactBtn.forEach(function (item, index) {
    item.onclick = function () {
        showMoreContact[index].classList.toggle('active');
    }
});

showMoreContact.forEach((item, index) =>{
    item.onmouseover = () => {
        moreContactBtn[index].classList.add('hover-off-contact');
    }
});

showMoreContact.forEach((item, index) =>{
    item.onmouseout = () => {
        moreContactBtn[index].classList.remove('hover-off-contact');
    }
});

let showEditPersonalPage = $('.edit-personal-page');
let editPersonalPageBtn = $('.edit-personal-page-js');
let closeEditPersonalPage = $('.close-edit-personal-page-js');
let editPersonalPageContainer = $('.edit-personal-page__container');
editPersonalPageBtn.onclick = () => {
    showEditPersonalPage.classList.add('active');
}

closeEditPersonalPage.onclick = () => {
    showEditPersonalPage.classList.remove('active');
}

showEditPersonalPage.addEventListener('click', function () {
    showEditPersonalPage.classList.remove('active');
    editPersonalPageContainer.addEventListener('click', function(event) {
        event.stopPropagation();
    })
})

let selectionPage = $$('.selection-personal-page-js');

function selectPage () {
    selectionPage.forEach((item) => {
        item.classList.remove('active');
    })
    this.classList.add('active');
}

selectionPage.forEach((item) => {
    item.addEventListener('click', selectPage);
});

let showPersonalMoreSetting = $('.more-personal-setting');
let personalMoreSettingBtn = $('.personal-more-setting-btn-js');
let showPersonalPageMore = $('.user-personal-page__more-list');
let personalPageMoreBtn = $('.personal-page-more-btn-js');

personalMoreSettingBtn.onclick = () => {
    showPersonalMoreSetting.classList.toggle('active');
    showPersonalMoreSetting.addEventListener('click', turnOffPagination);

    showPersonalMoreSetting.onmouseover = () => {
        personalMoreSettingBtn.classList.add('hover-off-setting');
    }
    showPersonalMoreSetting.onmouseout = () => {
        personalMoreSettingBtn.classList.remove('hover-off-setting');
    }
    
    showPersonalPageMore.classList.remove('active');
}

personalPageMoreBtn.onclick = () => {
    showPersonalPageMore.classList.toggle('active');
    showPersonalPageMore.addEventListener('click', turnOffPagination)
    showPersonalPageMore.onmouseover = () => {
        personalPageMoreBtn.classList.add('hover-off-transparent');
    }
    showPersonalPageMore.onmouseout = () => {
        personalPageMoreBtn.classList.remove('hover-off-transparent');
    }

    showPersonalMoreSetting.classList.remove('active');
}

let subnavNode = $('.header__subnav');
let subnavSettingBtn = $('.subnav-setting-btn-js');
let showSubnavSetting = $('.subnav-setting-js');
let privateFriendFixed = $('.private__friend');

document.onscroll = () => {
    const scrollBottom = window.scrollY || document.documentElement.scrollTop;
    // Subnav Header
    if (scrollBottom >= 510) {
        subnavNode.classList.add('active');
    } else {
        subnavNode.classList.remove('active');
    }

    // Private Friend
    if (scrollBottom >= 1340) {
        privateFriendFixed.classList.add('fixed');
    } else {
        privateFriendFixed.classList.remove('fixed');
    }
}

subnavSettingBtn.onclick = () => {
    showSubnavSetting.classList.toggle('active');

    showSubnavSetting.onmouseover = () => {
        subnavSettingBtn.classList.add('hover-off-setting');
    }
    showSubnavSetting.onmouseout = () => {
        subnavSettingBtn.classList.remove('hover-off-setting');
    }
}

let showEditStory = $('.edit-story');
let editStoryBtn = $('.edit-story-btn');
let inputStoryNode = $('.edit-story_input');
let showSizeInputAuth = $('.size-auth');
let editStorybtnSave = $('.edit-story-btn-save');
let editStorybtnCancel = $('.edit-story-btn-cancel');
let inputMaxSize = 101;

editStoryBtn.onclick = () => {
    showEditStory.classList.add('active');
    editStoryBtn.classList.add('disable');

    editStorybtnCancel.onclick = () => {
        showEditStory.classList.remove('active');
        editStoryBtn.classList.remove('disable');
        inputStoryNode.value = '';
        showSizeInputAuth.innerText = inputMaxSize;

        editStorybtnSave.classList.add('disable');
        editStorybtnSave.classList.remove('active');
    }
    
    inputStoryNode.oninput = () => {
        let inputStoryValueLength = inputStoryNode.value.length; 
        let sizeInputAuth = inputMaxSize - inputStoryValueLength;
        showSizeInputAuth.innerText = sizeInputAuth;
        if (inputStoryValueLength > 0) {
            editStorybtnSave.classList.remove('disable');
            editStorybtnSave.classList.add('active');

            // Bug sau khi nhap input lan 1 
            // thi lan 2 neu xoa het input van co the click

            // editStorybtnSave.onclick = () => {
            //     showEditStory.classList.remove('active');
            //     editStoryBtn.classList.remove('disable');
            //     editStorybtnSave.classList.add('disable');
            //     editStorybtnSave.classList.remove('active');
            //     inputStoryNode.value = '';
            //     showSizeInputAuth.innerText = inputMaxSize;
            //     inputStoryValueLength = 0;
            // }
        } else {
            editStorybtnSave.classList.add('disable');
            editStorybtnSave.classList.remove('active');
        }
    } 
    
}

let showModalInfoPublic = $('.modal-information-public');
let modalInfoPublicContainer = $('.modal-information-public__container');
let modalInfoPublicBtn = $('.open-modal-public-btn');
let modalInfoPublicCloseBtn = $('.close-modal-info-btn');
let modalInfoPublicCancelBtn = $('.modal-info-public-cancel-btn');
let modalInfoPublicSaveBtn = $('.modal-info-public-save-btn');

modalInfoPublicBtn.onclick = () => {
    showModalInfoPublic.classList.add('active');
    
    modalInfoPublicCloseBtn.onclick = () => {
        showModalInfoPublic.classList.remove('active');
    }

    modalInfoPublicCancelBtn.onclick = () => {
        showModalInfoPublic.classList.remove('active');
    }

    modalInfoPublicSaveBtn.onclick = () => {
        showModalInfoPublic.classList.remove('active');
    }
}

showModalInfoPublic.addEventListener('click', function () {
    showModalInfoPublic.classList.remove('active');
})

modalInfoPublicContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})

let showModalInterest = $('.modal-interest-public');
let modalInterestContainer = $('.modal-interest-publick__container');
let modalInterestBtn = $('.open-modal-interest');
let modalInterestCloseBtn = $('.close-modal-interest-btn');
let modalInterestCancelBtn = $('.modal-interest-public-cancel-btn');
let modalInterestSavelBtn = $('.modal-interest-public-save-btn');
let interestList = $$('.modal-interest-public__content-item');
let interestConfirm = $('.modal-interest-confirm');

modalInterestBtn.onclick = () => {
    showModalInterest.classList.add('active');

    modalInterestCloseBtn.onclick = () => {
        showModalInterest.classList.remove('active');
    }

    interestList.forEach((item) => {
        item.onclick = () => {
            item.classList.toggle('choose');
            let chooseList = $$('.choose')
            if (chooseList.length > 0) {
                interestConfirm.classList.remove('disable');

                modalInterestCancelBtn.onclick = () => {
                    showModalInterest.classList.remove('active');
                    interestList.forEach((e) => {
                        e.classList.remove('choose');
                        interestConfirm.classList.add('disable');
                    })
                }           
                modalInterestSavelBtn.onclick = () => {
                    showModalInterest.classList.remove('active');
                    interestList.forEach((e) => {
                        e.classList.remove('choose');
                        interestConfirm.classList.add('disable');
                    })
                } 
            } else {
                interestConfirm.classList.add('disable');
            }
        } 
    }) 
}

showModalInterest.addEventListener('click', function () {
    showModalInterest.classList.remove('active');
})

modalInterestContainer.addEventListener('click', function(e) {
    e.stopPropagation();
})

let showModalStory = $('.modal-story-public');
let modalStoryContainer = $('.modal-story-public__contai');
let modalStoryBtn = $('.open-modal-story');
let modalStoryCloseBtn = $('.close-modal-story-btn');

modalStoryBtn.onclick = () => {
    showModalStory.classList.add('active');

    modalStoryCloseBtn.onclick = () => {
        showModalStory.classList.remove('active');
    }
}

showModalStory.addEventListener('click', function () {
    showModalStory.classList.remove('active');
})

modalStoryContainer.addEventListener('click', function(e) {
    e.stopPropagation();
})

// Status Input 
let showInputStatus = $('.modal-status-input');
let inputStatusBtn = $('.private__status-input-btn');
let closeInputStatusBtn = $('.close-input-status-btn');
let statusWithBackground = $('.status-input__input-item-background');
let statusWithPicture = $('.status-input__input-item-picture');
let addPictureBtn = $('.add-picture-btn');
let closeAddPictureBtn = $('.status-input-close-btn');
let backgroundMoreBtn = $('.background-more-btn');
let backgroundBackBtn = $('.background-back-btn');
let backgroundMoreList = $('.status-input__background-list');
let tagListAllBtn = $('.tag-all-list');
let showTagListAll = $('.modal-tag-list-all');
let tagListAllBackBtn = $('.tag-list-back-btn');
let addPictureMobileBtn = $('.add-picture-moblie-btn');
let cancelPictureMobileBtn = $('.cancel-picture-moblie-btn')
let mobileQuest = $('.mobile-picture-quest');
let mobilePerform = $('.mobile-picture-perform');
let selectionShareBtn = $('.selection-share-btn');
let showSelectionShare = $('.modal-share-element__container');
let showInputStatusNode = $('.modal-status-input__container');
let selectionShareBackBtn = $('.selection-share-back-btn');
let tagOthersBtn = $('.tag-others-btn');
let showTagOthers = $('.modal-tag-others__container');
let tagOthersBackBtn = $('.tag-others-back-btn');
let tagOthersSuggestBtn = $('.tag-other__complete-btn');
let showFeelingAction = $('.modal-tag-feeling__container');
let feelingActionBtn = $('.feeling-action-btn');
let feelingActionBackBtn = $('.feeling-back-btn');
let feelingBtn = $('.feeling-btn');
let actionBtn = $('.action-btn');
let showFeeling = $('.tag-feeling__feel-list');
let showAction = $('.tag-feeling__action-list');
let tagLocationBtn = $('.tag-location-btn');
let showTagLocation = $('.modal-tag-location__container');
let tagLocationBackBtn = $('.location-back-btn');
let shortcutOpenStatusPictureBtn = $('.status-picture-shortcut-btn');
let lifeEventBtn = $('.life-event-btn');
let showLifeEvent = $('.modal-life-event__container');
let lifeEventBackBtn = $('.life-event-back-btn');
let shortcutOpenLifeEvent = $('.life-event-shortcut-btn');

showInputStatus.addEventListener('click', function () {
    showInputStatus.classList.remove('active');
    showInputStatusNode.classList.remove('trans');
    showInputStatusNode.classList.remove('disable');

    // Remove Add Picture
    addPictureBtn.classList.remove('active');
    statusWithBackground.classList.remove('disable');
    statusWithPicture.classList.add('disable');

    mobileQuest.classList.remove('disable');
    mobilePerform.classList.add('disable');
    
    // Remove Life Event
    showLifeEvent.classList.remove('active');

    // Remove Selection Share
    showSelectionShare.classList.remove('active');

    // Remove Tag
    showTagOthers.classList.remove('active');

    // Remove Feeling
    showFeelingAction.classList.remove('active');

    // Remove Location
    showTagLocation.classList.remove('active');

    // Remove List All
    showTagListAll.classList.remove('active');

})

showInputStatusNode.addEventListener('click', function(e) {
    e.stopPropagation();
});

showSelectionShare.addEventListener('click', function(e) {
    e.stopPropagation();
});

showTagOthers.addEventListener('click', function(e) {
    e.stopPropagation();
});

showFeelingAction.addEventListener('click', function(e) {
    e.stopPropagation();
});

showTagLocation.addEventListener('click', function(e) {
    e.stopPropagation();
});

showLifeEvent.addEventListener('click', function(e) {
    e.stopPropagation();
});

showTagListAll.addEventListener('click', function(e) {
    e.stopPropagation();
});

function handelInputStatus () {
    showInputStatus.classList.add('active');

    closeInputStatusBtn.onclick = () => {
        showInputStatus.classList.remove('active');
        showInputStatusNode.classList.remove('trans');

    }

    backgroundMoreBtn.onclick = () => {
        backgroundMoreBtn.classList.add('disable');
        backgroundMoreList.classList.remove('disable');
    
        backgroundBackBtn.onclick = () => {
            backgroundMoreBtn.classList.remove('disable');
            backgroundMoreList.classList.add('disable');
        }
    }
    
    addPictureBtn.onclick = () => {
        addPictureBtn.classList.add('active');
        statusWithBackground.classList.add('disable');
        statusWithPicture.classList.remove('disable');
    
        addPictureMobileBtn.onclick = () => {
            mobileQuest.classList.add('disable');
            mobilePerform.classList.remove('disable');
    
            cancelPictureMobileBtn.onclick = () => {
                mobileQuest.classList.remove('disable');
                mobilePerform.classList.add('disable');
            }
        }
    
        closeAddPictureBtn.onclick = () => {
            addPictureBtn.classList.remove('active');
            statusWithBackground.classList.remove('disable');
            statusWithPicture.classList.add('disable');
    
            mobileQuest.classList.remove('disable');
            mobilePerform.classList.add('disable');
        }
    }

    selectionShareBtn.onclick = () => {
        showSelectionShare.classList.add('active');
        showInputStatusNode.classList.add('disable');
        showInputStatusNode.classList.remove('trans');

        selectionShareBackBtn.onclick = () => {
            showSelectionShare.classList.remove('active');
            showInputStatusNode.classList.remove('disable');
            showInputStatusNode.classList.add('trans');
        }
    }

    tagOthersBtn.onclick = () => {
        showTagOthers.classList.add('active');
        showInputStatusNode.classList.add('disable');
        showInputStatusNode.classList.remove('trans');

        function closeTagOthers () {
            showTagOthers.classList.remove('active');
            showInputStatusNode.classList.remove('disable');
            showInputStatusNode.classList.add('trans');
        }

        tagOthersBackBtn.addEventListener('click', closeTagOthers);
        tagOthersSuggestBtn.addEventListener('click', closeTagOthers);
    }

    feelingActionBtn.onclick = () => {
        showFeelingAction.classList.add('active');
        showInputStatusNode.classList.add('disable');
        showInputStatusNode.classList.remove('trans');

        
        feelingBtn.onclick = () => {
            feelingBtn.classList.add('active');
            showFeeling.classList.add('active');
            
            actionBtn.classList.remove('active');
            showAction.classList.remove('active');
        }

        actionBtn.onclick = () => {
            actionBtn.classList.add('active');
            showAction.classList.add('active');

            feelingBtn.classList.remove('active');
            showFeeling.classList.remove('active');
        }

        feelingActionBackBtn.onclick = () => {
            showFeelingAction.classList.remove('active');
            showInputStatusNode.classList.remove('disable');
            showInputStatusNode.classList.add('trans');
        }
    }
    
    tagLocationBtn.onclick = () => {
        showTagLocation.classList.add('active');
        showInputStatusNode.classList.add('disable');
        showInputStatusNode.classList.remove('trans');

        tagLocationBackBtn.onclick = () => {
            showTagLocation.classList.remove('active');
            showInputStatusNode.classList.remove('disable');
            showInputStatusNode.classList.add('trans');
        }
    }

    tagListAllBtn.onclick = () => {
        showTagListAll.classList.add('active');
        showInputStatusNode.classList.add('disable');
        showInputStatusNode.classList.remove('trans');

        tagListAllBackBtn.onclick = () => {
            showTagListAll.classList.remove('active');
            showInputStatusNode.classList.remove('disable');
            showInputStatusNode.classList.add('trans');
        }
    }

    lifeEventBtn.onclick = () => {
        showLifeEvent.classList.add('active');
        showInputStatusNode.classList.add('disable');
        showInputStatusNode.classList.remove('trans');

        showTagListAll.classList.remove('active');

        lifeEventBackBtn.onclick = () => {
            showLifeEvent.classList.remove('active');
            showInputStatusNode.classList.remove('disable');
            showInputStatusNode.classList.add('trans');
        }
    }
}

inputStatusBtn.addEventListener('click', handelInputStatus);
shortcutOpenStatusPictureBtn.onclick = () => {
    showInputStatus.classList.add('active');

    addPictureBtn.classList.add('active');
    statusWithBackground.classList.add('disable');
    statusWithPicture.classList.remove('disable');
    
    addPictureMobileBtn.onclick = () => {
    mobileQuest.classList.add('disable');
    mobilePerform.classList.remove('disable');
    
    cancelPictureMobileBtn.onclick = () => {
        mobileQuest.classList.remove('disable');
        mobilePerform.classList.add('disable');
        }
    }

    closeAddPictureBtn.onclick = () => {
        addPictureBtn.classList.remove('active');
        statusWithBackground.classList.remove('disable');
        statusWithPicture.classList.add('disable');

        mobileQuest.classList.remove('disable');
        mobilePerform.classList.add('disable');
    }
    handelInputStatus();
}

shortcutOpenLifeEvent.onclick = () => {
    showLifeEvent.classList.add('active');
    showInputStatusNode.classList.add('disable');
    showInputStatusNode.classList.remove('trans');

    showTagListAll.classList.remove('active');

    lifeEventBackBtn.onclick = () => {
        showLifeEvent.classList.remove('active');
        showInputStatusNode.classList.remove('disable');
        showInputStatusNode.classList.add('trans');
    }

    handelInputStatus();

}

let selectionShareStatusList = $$('.share-element__item');

function selectionShare () {
    selectionShareStatusList.forEach((item) => {
        item.classList.remove('choose-item');
    })
    this.classList.add('choose-item');
}

selectionShareStatusList.forEach((item) => {
    item.addEventListener('click', selectionShare);
})

let showModalFilter = $('.modal-filter');
const modalFilterContainer = $('.modal-filter-container');
const filterBtn = $('.filter-btn');
const filterSearchBtn = $('.filter-search-btn');
let closeFilterBtn = $('.filter-close-btn');
let deleteFilterBtn = $('.filter-delete-btn');
let saveFilterBtn = $('.filter-save-btn');

let filterSelectBtnList = $$('.filter-content__item-select');
let filterSelectList = $$('.filter-content__select-list');
let filterSelectNode = $('.filter-content__select-list');
let showFilterTimeList = $('.filter-time-list');
let selectTimeBtn = $('.select-time-btn');
let selectTimeList = $$('.item-time');

function showFilter () {
    showModalFilter.classList.add('active');

    function closeModalFiter () {
        showModalFilter.classList.remove('active');
    }
    closeFilterBtn.addEventListener('click', closeModalFiter);
    saveFilterBtn.addEventListener('click', closeModalFiter);
    deleteFilterBtn.addEventListener('click', closeModalFiter);
}


filterBtn.addEventListener('click', showFilter);
filterSearchBtn.addEventListener('click', showFilter);

showModalFilter.addEventListener('click', function () {
    showModalFilter.classList.remove('active');
})

modalFilterContainer.addEventListener('click', function (e) {
    e.stopPropagation();
})

filterSelectList.forEach((item, index) => {
    // item.classList.remove('active');
    item.addEventListener('click', turnOffPagination);
    item.onmouseover = () => {
        filterSelectBtnList[index].classList.add('hover-off-contact');
    }
    item.onmouseout = () => {
        filterSelectBtnList[index].classList.remove('hover-off-contact');
    }
})

selectTimeBtn.onclick = () => {
    showFilterTimeList.classList.toggle('active');

    showFilterPosterList.classList.remove('active');
    showFilterPrivacyList.classList.remove('active');
    showFilterTagList.classList.remove('active');

    function selectItem () {
        selectTimeList.forEach((item) => {
            item.classList.remove('select');
        })
        this.classList.add('select');
    }
    selectTimeList.forEach((item) => {
        item.addEventListener('click', selectItem);
    })
}

let selectPosterBtn = $('.select-poster-btn');
let showFilterPosterList = $('.filter-poster-list');
let selectPosterList = $$('.item-poster');

selectPosterBtn.onclick = () => {
    showFilterPosterList.classList.toggle('active');

    showFilterTimeList.classList.remove('active');
    showFilterPrivacyList.classList.remove('active');
    showFilterTagList.classList.remove('active');

    function selectItem () {
        selectPosterList.forEach((item) => {
            item.classList.remove('select');
        })
        this.classList.add('select');
    }
    selectPosterList.forEach((item) => {
        item.addEventListener('click', selectItem);
    })
}

let selectPrivacyBtn = $('.select-tag-btn');
let showFilterPrivacyList = $('.filter-tag-list');
let selectPrivacyList = $$('.item-tag');

selectPrivacyBtn.onclick = () => {
    showFilterPrivacyList.classList.toggle('active');

    showFilterTagList.classList.remove('active');
    showFilterTimeList.classList.remove('active');
    showFilterPosterList.classList.remove('active');

    function selectItem () {
        selectPrivacyList.forEach((item) => {
            item.classList.remove('select');
        })
        this.classList.add('select');
    }
    selectPrivacyList.forEach((item) => {
        item.addEventListener('click', selectItem);
    })
}

let selectTagBtn = $('.select-privacy-btn');
let showFilterTagList = $('.filter-privacy-list');
let selectTagList = $$('.item-privacy');

selectTagBtn.onclick = () => {
    showFilterTagList.classList.toggle('active');

    showFilterTimeList.classList.remove('active');
    showFilterPosterList.classList.remove('active');
    showFilterPrivacyList.classList.remove('active');

    function selectItem () {
        selectTagList.forEach((item) => {
            item.classList.remove('select');
        })
        this.classList.add('select');
    }
    selectTagList.forEach((item) => {
        item.addEventListener('click', selectItem);
    })
}

const showManagePost = $('.modal-user-post');
const managePostBtn = $('.manage-post-btn');
const closeManagePostBtn = $('.manage-post-close-btn');
const managePostEditBtn = $('.manage-post-edit-btn');
const managePostDeleteBtn = $('.manage-post-delete-btn')
let showCountSelectSize = $('.count-select-size');
let showTotalSelectSize = $('.total-select-size');
let userPostList = $$('.user-post__item');
let managePostBtnList = $$('.modal-confirm__post-manage-btn');
let checkPostedList = $$('.user-checkbox__input');
let showSelectNote = $('.user-post__selected-note');
const selectAllBtn = $('.select-all-btn');
const cancelSelectAllBtn = $('.cancel-select-all');
const showEditPost = $('.modal-edit-post');
const editPostBackBtn = $('.edit-post-back-btn');
const selectPostList = $('.modal-user-post-container');
const selectionEditList = $$('.selection-edit-post');
const confirmEditPostBtn = $('.confirm-edit-post-btn');
const editPostCloseBtn = $('.edit-post-close-btn');

let totalSelectSize = userPostList.length;

showTotalSelectSize.innerText = totalSelectSize;

showManagePost.addEventListener('click', function () {
    showManagePost.classList.remove('active');
    showEditPost.classList.remove('active');
    selectPostList.classList.remove('disable');
    selectPostList.classList.remove('trans');
    confirmEditPostBtn.classList.add('disable');
    checkPostedList.forEach((item) => {
        item.checked = false;
    })
    managePostBtnList.forEach((item) => {
        item.classList.add('disable');
    })
    countSelectPost = 0;
    showCountSelectSize.innerText = countSelectPost;
    selectionEditList.forEach((item) => {
        item.checked = false;
    })
    showSelectNote.classList.add('disable');

    selectAllBtn.classList.remove('disable');
    cancelSelectAllBtn.classList.add('disable');
})

selectPostList.addEventListener('click', function (e) {
    e.stopPropagation();
})
showEditPost.addEventListener('click', function (e) {
    e.stopPropagation();
})

managePostBtn.onclick = () => {
    let countSelectPost = 0;
    showManagePost.classList.add('active');
    closeManagePostBtn.onclick = () => {
        showManagePost.classList.remove('active');
        checkPostedList.forEach((item) => {
            item.checked = false;
        })
        countSelectPost = 0;
        showCountSelectSize.innerText = countSelectPost;
        managePostBtnList.forEach((item) => {
            item.classList.add('disable');
        })
        showSelectNote.classList.add('disable');

        selectionEditList.forEach((item) => {
            item.checked = false;
        })

        selectAllBtn.classList.remove('disable');
        cancelSelectAllBtn.classList.add('disable');
    }

    function selectPostedList () {
        function checkSelected () {
            if (countSelectPost != 0) {
                showSelectNote.classList.remove('disable');
                managePostBtnList.forEach((item) => {
                    item.classList.remove('disable');
                })

                managePostEditBtn.onclick = () => {
                    showEditPost.classList.add('active');
                    selectPostList.classList.add('disable');
                    selectPostList.classList.remove('trans');
                    
                    editPostBackBtn.onclick = () => {
                        showEditPost.classList.remove('active');
                        selectPostList.classList.remove('disable');
                        selectPostList.classList.add('trans');
                        confirmEditPostBtn.classList.add('disable');
                        selectionEditList.forEach((item) => {
                            item.checked = false;
                        })
                    }

                    selectionEditList.forEach((item) => {
                        item.addEventListener('change', function() {
                            if (this.checked) {
                                confirmEditPostBtn.classList.remove('disable');
                            } else {
                                confirmEditPostBtn.classList.add('disable');
                            }
                        })
                    })
                    
                    editPostCloseBtn.onclick = () => {
                        showManagePost.classList.remove('active');
                        showEditPost.classList.remove('active');
                        selectPostList.classList.remove('disable');
                        selectPostList.classList.remove('trans');
                        confirmEditPostBtn.classList.add('disable');
                        checkPostedList.forEach((item) => {
                            item.checked = false;
                        })
                        managePostBtnList.forEach((item) => {
                            item.classList.add('disable');
                        })
                        countSelectPost = 0;
                        showCountSelectSize.innerText = countSelectPost;
                        selectionEditList.forEach((item) => {
                            item.checked = false;
                        })
                        showSelectNote.classList.add('disable');

                        selectAllBtn.classList.remove('disable');
                        cancelSelectAllBtn.classList.add('disable');
                    }
                }
                
            } else {
                showSelectNote.classList.add('disable');
                managePostBtnList.forEach((item) => {
                    item.classList.add('disable');
                })
            }
        }
    
        checkPostedList.forEach((item) => {
            item.addEventListener('change', function () {
                if (this.checked) {
                    countSelectPost++;
                } else {
                    countSelectPost--;
                }
                showCountSelectSize.innerText = countSelectPost;
                checkSelected();
            })
        })
    
        selectAllBtn.onclick = () => {
            selectAllBtn.classList.add('disable');
            cancelSelectAllBtn.classList.remove('disable');
            checkPostedList.forEach((item) => {
                item.checked = true;
            })
            countSelectPost = totalSelectSize;
            showCountSelectSize.innerText = countSelectPost;
            checkSelected();  
        }
        cancelSelectAllBtn.onclick = () => {
            selectAllBtn.classList.remove('disable');
            cancelSelectAllBtn.classList.add('disable');
            checkPostedList.forEach((item) => {
                item.checked = false;
            })
            countSelectPost = 0;
            showCountSelectSize.innerText = countSelectPost;
            checkSelected();
        }
        
    }
    
    selectPostedList();
}



const viewModeList = $$('.post-view-mode__item');
const showViewGridPage = $('.post-page__grid');
const viewGridPageBtn = $('.view-grid-page');
const viewListPageBtn = $('.view-list-page');
const showViewListPage = $('.post-page__view-list');
viewGridPageBtn.onclick = () => {
    viewGridPageBtn.classList.add('active');
    viewListPageBtn.classList.remove('active');

    showViewGridPage.classList.add('active');
    showViewListPage.classList.remove('active');
}

viewListPageBtn.onclick = () => {
    viewListPageBtn.classList.add('active');
    viewGridPageBtn.classList.remove('active');

    showViewListPage.classList.add('active');
    showViewGridPage.classList.remove('active');
}

const userEditPostList = $$('.user-post__user-edit-list');
const userEditPostBtnList = $$('.user-post__user-edit');

userEditPostBtnList.forEach((item, index) => {
    item.onclick = () => {
        userEditPostList[index].classList.toggle('active');
    }
})

userEditPostList.forEach((item, index) => {
    item.addEventListener('click', turnOffPagination);
    item.onmouseover = () => {
        userEditPostBtnList[index].classList.add('hover-off-transparent');
    }
    item.onmouseout = () => {
        userEditPostBtnList[index].classList.remove('hover-off-transparent');
    }
})


const likeBtnList = $$('.like-btn');
const likeIconNormalList = $$('.like-icon-normal');
const likeIconActiveList = $$('.like-icon-active');
const shareBtnList = $$('.share-btn');
const shareOptionList = $$('.user-share__list');

likeBtnList.forEach((item,index) => {
    item.onclick = () => {
        item.classList.toggle('active');
        likeIconNormalList[index].classList.toggle('disable');
        likeIconActiveList[index].classList.toggle('disable');
    }
})

shareBtnList.forEach((item, index) => {
    item.onclick = () => {
        shareOptionList[index].classList.toggle('active');
        let countMax = index + 1;
         if ( countMax == shareOptionList.length) {
           shareOptionList[index].classList.add('user-share__list--postion');
         }
    }
})

shareOptionList.forEach((item, index) => {
    item.addEventListener('click',turnOffPagination);
    item.onmouseover = () => {
        shareBtnList[index].classList.add('hover-off-background');
    }
    item.onmouseout = () => {
        shareBtnList[index].classList.remove('hover-off-background');
    }

    
})

const userCommentList = $$('.user-comment__input');
function autoGrow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

const createChatBtn = $('.user-chat__create');
const showCreateChat = $('.user-chat__content');
const createChatCloseBtn = $('.user-chat__close-btn');

createChatBtn.onclick = () => {
    showCreateChat.classList.toggle('active');
    createChatCloseBtn.onclick = () => {
        showCreateChat.classList.remove('active');
    }
}

const editPostBtnList = $$('.user__edit-post-btn');
const postEditOptionList = $$('.post-edit-option-list');

editPostBtnList.forEach((item, index) => {
    item.onclick = () => {
        postEditOptionList[index].classList.toggle('active');
    }
})

postEditOptionList.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
    })
})

// Handle Video
const videoBtnActionList = $$('.video-post__video-action');
const videoPlayBtnList = $$('.video-post__video-play-btn');
const videoPauseBtnList = $$('.video-post__video-pause-btn')
const videoList = $$('.video-post__video-item');
const progessBarList = $$('.video-post__time-fill');
const timeSliderList = $$('.video-post__time-range-input');
const totalTimeMinuteList = $$('.total-time-minute');
const totalTimeSecondList = $$('.total-time-second');
const realTimeSecondList = $$('.real-time-second');
const realTimeMinuteList = $$('.real-time-minute');
const volumeBarList = $$('.video-post__volume-fill');
const valueVolumeBarList = $$('.video-post__volume-range-input');
const volumeHighList = $$('.volume-hight-btn');
const volumeMediumList = $$('.volume-medium-btn');
const volumeLowList = $$('.volume-low-btn');
const volumeOffList = $$('.volume-off-btn');
const volumeMuteList = $$('.volume-mute-btn');
const videoReloadBtnList = $$('.video-post__video-reload-btn');
const playCenterBtnList = $$('.video-post__play-center-btn');
const overlayVideoList = $$('.video-post__play-center-cover');
const videoControlList = $$('.video-post__video-control');

function pauseOtherSong () {
    videoList.forEach((e) => {
        e.pause();
    })
    videoPauseBtnList.forEach ((e, index) => {
        e.classList.add('disable');
    })
    videoPlayBtnList.forEach((e, index) => {
        if (videoList[index].currentTime != videoList[index].duration) {
            e.classList.remove('disable');
            
        } 
    })
    videoControlList.forEach((e) => {
        e.classList.add('pause');
    })
}

playCenterBtnList.forEach((item, index) => {
    item.onclick = () => {
        pauseOtherSong();
        videoList[index].play();
        overlayVideoList[index].classList.add('playing');
        videoControlList[index].classList.add('playing');
        
        videoPlayBtnList[index].classList.add('disable');
        videoPauseBtnList[index].classList.remove('disable');
        videoControlList[index].classList.remove('pause');
    }
})

videoReloadBtnList.forEach((item, index) => {
    item.onclick = () => {
        pauseOtherSong();
        videoList[index].play();
        item.classList.add('disable');
        videoPlayBtnList[index].classList.add('disable');
        videoPauseBtnList[index].classList.remove('disable');
        videoControlList[index].classList.remove('reload');
        videoControlList[index].classList.remove('pause');
        
    }
})

videoPlayBtnList.forEach((item, index) => {
    item.onclick = () => {
        pauseOtherSong();
        videoList[index].play();
        item.classList.add('disable');
        videoPauseBtnList[index].classList.remove('disable');
        videoControlList[index].classList.remove('pause');
    }
})

videoPauseBtnList.forEach((item, index) => {
    item.onclick = () => {
        videoList[index].pause();
        item.classList.add('disable');
        videoPlayBtnList[index].classList.remove('disable');
        videoControlList[index].classList.add('pause');
    }
})

volumeHighList.forEach((item, index) => {
    item.onclick = () => {
        volumeMuteList[index].classList.remove('disable');
        videoList[index].muted = true;
        item.classList.add('disable')
        volumeMediumList[index].classList.add('disable');
        volumeLowList[index].classList.add('disable');
        volumeOffList[index].classList.add('disable');
        
        volumeBarList[index].style.width = 0 + "%";
        valueVolumeBarList[index].value = 0;        
        videoList[index].volume = 0;
    }
})
volumeMediumList.forEach((item, index) => {
    item.onclick = () => {
        volumeMuteList[index].classList.remove('disable');
        videoList[index].muted = true;
        item.classList.add('disable')
        volumeHighList[index].classList.add('disable');
        volumeLowList[index].classList.add('disable');
        volumeOffList[index].classList.add('disable');
        
        volumeBarList[index].style.width = 0 + "%";
        valueVolumeBarList[index].value = 0;        
        videoList[index].volume = 0;
    }
})
volumeLowList.forEach((item, index) => {
    item.onclick = () => {
        volumeMuteList[index].classList.remove('disable');
        videoList[index].muted = true;
        item.classList.add('disable')
        volumeHighList[index].classList.add('disable');
        volumeMediumList[index].classList.add('disable');
        volumeOffList[index].classList.add('disable');
        
        volumeBarList[index].style.width = 0 + "%";
        valueVolumeBarList[index].value = 0;        
        videoList[index].volume = 0;
    }
})
volumeOffList.forEach((item, index) => {
    item.onclick = () => {
        volumeMuteList[index].classList.remove('disable');
        videoList[index].muted = true;
        item.classList.add('disable')
        volumeHighList[index].classList.add('disable');
        volumeMediumList[index].classList.add('disable');
        volumeLowList[index].classList.add('disable');
        
        volumeBarList[index].style.width = 0 + "%";
        valueVolumeBarList[index].value = 0;        
        videoList[index].volume = 0;
    }
})


volumeMuteList.forEach((item, index) => {
    item.onclick = () => {
        item.classList.add('disable');
        volumeMediumList[index].classList.remove('disable');
        videoList[index].muted = false;
        
        volumeBarList[index].style.width = 50 + "%";
        valueVolumeBarList[index].value = 50;
        videoList[index].volume = 0.5;
    }
});

valueVolumeBarList.forEach((item, index) => {
    item.oninput = (e) => {
        videoList[index].muted = false;
        volumeMuteList[index].classList.add('disable');
        volumeBarList[index].style.width = item.value + "%";
        const seekVolume = 1 / 100 * e.target.value;
        videoList[index].volume = seekVolume;

        if (item.value >= 67  && item.value <= 100) {
            volumeHighList[index].classList.remove('disable');
           
            volumeMediumList[index].classList.add('disable');
            volumeLowList[index].classList.add('disable');
            volumeOffList[index].classList.add('disable');
        } 
        if (item.value >= 34 && item.value < 67) {
            volumeMediumList[index].classList.remove('disable');
            
            volumeLowList[index].classList.add('disable');
            volumeHighList[index].classList.add('disable');
            volumeOffList[index].classList.add('disable');
        }
        if (item.value > 0 && item.value < 34) {
            volumeLowList[index].classList.remove('disable');

            volumeHighList[index].classList.add('disable');
            volumeOffList[index].classList.add('disable');
            volumeMediumList[index].classList.add('disable');

        }  
        if (item.value == 0) {
            volumeOffList[index].classList.remove('disable');
            
            volumeHighList[index].classList.add('disable');
            volumeMediumList[index].classList.add('disable');
            volumeLowList[index].classList.add('disable');
        } 
    }
})

timeSliderList.forEach((item, index) => {
    item.oninput = (e) => {
        progessBarList[index].style.width = item.value + "%"
        const seekTime = videoList[index].duration / 100 * e.target.value;
        videoList[index].currentTime = seekTime;
    }
})

videoList.forEach((item, index) => {
    item.volume = 0.5;
    item.ontimeupdate = () => {
        if (item.duration) {
            const progress = Math.floor(item.currentTime / item.duration * 100);
            timeSliderList[index].value = progress;
            progessBarList[index].style.width = progress + "%" 
        }
        
        let realTime = Math.floor(item.currentTime);
        realTimeMinuteList[index].innerText = Math.floor(realTime / 60);
        realTimeSecondList[index].innerText = Math.floor(realTime % 60);

        const totalTime = Math.floor(item.duration);
        totalTimeMinuteList[index].innerText = Math.floor(totalTime / 60);
        totalTimeSecondList[index].innerText = Math.floor(totalTime % 60);
        
        if (item.currentTime == item.duration) {
            videoPlayBtnList[index].classList.add('disable');
            videoPauseBtnList[index].classList.add('disable');
            videoReloadBtnList[index].classList.remove('disable');
            videoControlList[index].classList.add('reload');
        } 
    }
})

