$(document).ready(function() {

    // ===== Sidebar Navigation =====
    $('.sidebar-item[data-section]').on('click', function(e) {
        e.preventDefault();
        
        // Update active sidebar item
        $('.sidebar-item').removeClass('active');
        $(this).addClass('active');
        
        // Switch content section
        var sectionId = $(this).data('section');
        $('.content-section').removeClass('active');
        $('#' + sectionId).addClass('active');

        // Close sidebar on mobile
        if ($(window).width() <= 1024) {
            $('#sidebar').removeClass('open');
        }
    });

    // ===== Sidebar Toggle (hamburger) =====
    $('#sidebarToggle').on('click', function() {
        var sidebar = $('#sidebar');
        if ($(window).width() <= 1024) {
            sidebar.toggleClass('open');
        } else {
            sidebar.toggleClass('collapsed');
        }
    });

    // ===== Typing Animation =====
    var typed = new Typed(".typing", {
        strings: ["Cloud DevOps Engineer", "GCP Expert", "Infrastructure Coder", "Problem Solver"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Cloud DevOps Engineer", "GCP Expert", "Infrastructure Coder", "Problem Solver"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    // ===== Search Functionality (simple filter) =====
    $('#searchInput').on('input', function() {
        var query = $(this).val().toLowerCase();
        if (query.length === 0) return;

        // Simple: jump to section matching the query
        var sections = {
            'dashboard': ['dashboard', 'home', 'overview', 'welcome', 'stats'],
            'about': ['about', 'bio', 'profile', 'resume', 'cv', 'who'],
            'skills': ['skills', 'skill', 'terraform', 'gcp', 'docker', 'kubernetes', 'python', 'ci/cd', 'compute'],
            'projects': ['projects', 'deployments', 'infosys', 'capgemini', 'experience', 'work', 'job'],
            'contact': ['contact', 'email', 'message', 'mail', 'hire', 'network']
        };

        for (var section in sections) {
            for (var i = 0; i < sections[section].length; i++) {
                if (sections[section][i].includes(query)) {
                    $('.sidebar-item').removeClass('active');
                    $('[data-section="' + section + '"]').addClass('active');
                    $('.content-section').removeClass('active');
                    $('#' + section).addClass('active');
                    return;
                }
            }
        }
    });

    // ===== Handle search on Enter =====
    $('#searchInput').on('keypress', function(e) {
        if (e.which === 13) {
            $(this).trigger('input');
        }
    });
});