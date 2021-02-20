const translateCategory = (item) => {

    let category = item.category;

    if( category.includes('Health and Environment')) return {...item, pinCategory: 'Public Health'}
    if( category === 'Public Safety & Public Health') return {...item, pinCategory: 'Public Safety'}

    if( category.includes('Safety')) return {...item, pinCategory: 'Public Safety'};
    if( category.includes('Communit') || category.includes('Cultur') || category.includes('District-Wide Priorities')) return {...item, pinCategory: 'Culture and Community Facilities'};
    if( category.includes('School') || category.includes('Education') || category.includes('Librar')) return {...item, pinCategory: 'Schools and Education'};
    if( category.includes('Environment')) return {...item, pinCategory: 'Environment'};
    
    if( category.includes('Recreation') || category.includes('Parks')) return {...item, pinCategory: 'Parks and Recreation'};
    if( category.includes('Health')) return {...item, pinCategory: 'Public Health'};
    
    // if( category.includes('')) return {...item, pinCategory: 'Previously funded'};
    
    if( category.includes('Housing')) return {...item, pinCategory: 'Housing'};
    if( category.includes('Sanitation')) return {...item, pinCategory: 'Sanitation'};
    if( category.includes('Senior')) return {...item, pinCategory: 'Seniors'};
    if( category.includes('Streets')) return {...item, pinCategory: 'Streets and Sidewalks'};
    if( category.includes('Transit') || category.includes('Transportation')) return {...item, pinCategory: 'Transit and Transportation'};
    if( category.includes('Youth')) return {...item, pinCategory: 'Youth'};

    // if( category.includes('Save your money') || category.includes('Save your money')) return {...item, pinCategory: 'Previously funded'}
    // default)
    //     return item;
}

export default translateCategory;