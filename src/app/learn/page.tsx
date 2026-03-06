'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAssistant } from '@/contexts/AssistantContext';

interface Video {
  id: number;
  title: string;
  duration: string;
  desc: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  thumbnail?: string;
  fullDesc?: string;
}

export default function LearnHub() {
  const { setCurrentPage } = useAssistant();
  const [selectedPlaylist, setSelectedPlaylist] = useState('getting-started');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [watchedVideos, setWatchedVideos] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState<'all' | 'Beginner' | 'Intermediate' | 'Advanced'>('all');

  useEffect(() => {
    setCurrentPage('learning');
  }, [setCurrentPage]);

  const playlists: { [key: string]: Video[] } = {
    'getting-started': [
      { 
        id: 1, 
        title: 'What is Customs Clearing?', 
        duration: '4:32', 
        desc: 'Understanding the customs process',
        instructor: 'Sarah Johnson',
        level: 'Beginner',
        rating: 4.8,
        fullDesc: 'Learn the fundamentals of customs clearing, including documentation, duties, and compliance requirements for international shipments.'
      },
      { 
        id: 2, 
        title: 'How to Get a Logistics Quote', 
        duration: '3:15', 
        desc: 'Step-by-step quote guide',
        instructor: 'James Mwangi',
        level: 'Beginner',
        rating: 4.9,
        fullDesc: 'A practical guide to requesting and understanding logistics quotes, including pricing factors and cost optimization.'
      },
      { 
        id: 3, 
        title: 'HS Codes Explained', 
        duration: '5:48', 
        desc: 'Product classification basics',
        instructor: 'Maria Rodriguez',
        level: 'Beginner',
        rating: 4.7,
        fullDesc: 'Master the Harmonized System (HS) code classification system used globally for tariff determination.'
      },
      { 
        id: 4, 
        title: 'Incoterms Simplified', 
        duration: '6:20', 
        desc: 'EXW, FOB, CIF, DDP explained',
        instructor: 'David Chen',
        level: 'Intermediate',
        rating: 4.8,
        fullDesc: 'Understanding international commercial terms (Incoterms) and their impact on shipping costs and responsibilities.'
      },
    ],
    'advanced': [
      { 
        id: 5, 
        title: 'Trade Agreement Benefits', 
        duration: '7:12', 
        desc: 'SADC preferential tariffs',
        instructor: 'Thabo Mkhize',
        level: 'Advanced',
        rating: 4.9,
        fullDesc: 'Leverage SADC trade agreements to optimize your duty rates and access preferential tariffs.'
      },
      { 
        id: 6, 
        title: 'Duty Optimization Strategies', 
        duration: '8:45', 
        desc: 'Legal ways to minimize taxes',
        instructor: 'Amara Diallo',
        level: 'Advanced',
        rating: 4.8,
        fullDesc: 'Legitimate strategies to minimize duties and taxes through proper classification and trade agreement utilization.'
      },
      { 
        id: 7, 
        title: 'Supply Chain Risk Management', 
        duration: '9:30', 
        desc: 'Protecting your shipments',
        instructor: 'Priya Patel',
        level: 'Advanced',
        rating: 4.7,
        fullDesc: 'Identify and mitigate risks in your supply chain through insurance, diversification, and contingency planning.'
      },
      { 
        id: 8, 
        title: 'Corridor-Specific Requirements', 
        duration: '10:15', 
        desc: 'SA-ZW-KE routes deep dive',
        instructor: 'James Mwangi',
        level: 'Advanced',
        rating: 4.9,
        fullDesc: 'Deep dive into specific trade corridor requirements including South Africa-Zimbabwe-Kenya routes.'
      },
    ],
    'case-studies': [
      { 
        id: 9, 
        title: 'Mining Equipment Export Case', 
        duration: '12:40', 
        desc: 'How we cleared 50-ton shipment',
        instructor: 'David Chen',
        level: 'Advanced',
        rating: 5.0,
        fullDesc: 'Real-world case study: Successfully cleared a complex 50-ton mining equipment shipment with zero delays.'
      },
      { 
        id: 10, 
        title: 'FMCG Consolidation Strategy', 
        duration: '8:20', 
        desc: 'Saving 30% through smart routing',
        instructor: 'Amara Diallo',
        level: 'Intermediate',
        rating: 4.8,
        fullDesc: 'How consolidation and smart routing strategies saved a major FMCG company 30% on logistics costs.'
      },
      { 
        id: 11, 
        title: 'Emergency Customs Clearance', 
        duration: '6:50', 
        desc: 'Real story: 24-hour urgent delivery',
        instructor: 'Thabo Mkhize',
        level: 'Advanced',
        rating: 5.0,
        fullDesc: 'Behind-the-scenes of how we cleared an urgent shipment in just 24 hours through strategic coordination.'
      },
      { 
        id: 12, 
        title: 'Cross-Border Vehicle Export', 
        duration: '11:30', 
        desc: '7-step vehicle export process',
        instructor: 'Sarah Johnson',
        level: 'Intermediate',
        rating: 4.9,
        fullDesc: 'Complete walkthrough of the 7-step vehicle export process from selection to final delivery.'
      },
    ]
  };

  const instructors = [
    { name: 'Sarah Johnson', role: 'Customs Compliance Expert', bio: '15+ years in customs regulations' },
    { name: 'James Mwangi', role: 'Regional Logistics Lead', bio: 'SADC corridor specialist' },
    { name: 'Maria Rodriguez', role: 'Classification Specialist', bio: 'HS code expert' },
    { name: 'David Chen', role: 'Supply Chain Director', bio: 'International trade advisor' },
    { name: 'Thabo Mkhize', role: 'Trade Agreement Specialist', bio: 'SADC trade expert' },
    { name: 'Amara Diallo', role: 'Cost Optimization Lead', bio: 'Duty reduction strategist' },
    { name: 'Priya Patel', role: 'Risk Manager', bio: 'Supply chain resilience expert' },
  ];

  const allVideos = Object.values(playlists).flat();
  
  const filteredVideos = allVideos
    .filter(v => filterLevel === 'all' || v.level === filterLevel)
    .filter(v => v.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                 v.desc.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(v => selectedPlaylist === 'all' || playlists[selectedPlaylist]?.includes(v));

  const currentPlaylist = selectedPlaylist === 'all' ? filteredVideos : (playlists[selectedPlaylist] || []);
  const displayVideos = searchQuery || filterLevel !== 'all' ? filteredVideos : currentPlaylist;

  const completionRate = Math.round((watchedVideos.length / allVideos.length) * 100);

  const markWatched = (videoId: number) => {
    if (!watchedVideos.includes(videoId)) {
      setWatchedVideos([...watchedVideos, videoId]);
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .video-card {
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .section-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #1E6B4C 0%, transparent 100%);
          margin: 1.5rem 0;
        }
      `}</style>

      {/* Premium Hero */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1e3a5f 100%)' }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url('/afribridge-warehouse.webp')`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-blue-500/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <p style={{
              color: '#F5B041',
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              📚 Learn at Your Pace
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{
              color: '#F5B041',
              textShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
              letterSpacing: '-0.02em',
              fontWeight: '800',
              lineHeight: '1.15'
            }}>
              Professional Learning Center
            </h1>
            <div className="section-divider"></div>
            <p className="text-lg md:text-xl max-w-3xl" style={{
              color: '#E5E7EB',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              lineHeight: '1.8',
              fontWeight: '400'
            }}>
              Master customs, compliance, and logistics through expert-led video tutorials. 30+ lessons from industry specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section style={{ padding: '2rem 2rem', background: '#f0fdf4', borderBottom: '2px solid #d1fae5' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <p style={{ color: '#0B1F3A', fontWeight: '700', margin: 0 }}>
              Your Learning Progress
            </p>
            <p style={{ color: '#1E6B4C', fontWeight: '700', margin: 0 }}>
              {watchedVideos.length} of {allVideos.length} videos watched ({completionRate}%)
            </p>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            background: '#dcfce7',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${completionRate}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #1E6B4C 0%, #0B1F3A 100%)',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '3rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Search and Filters */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <input
                type="text"
                placeholder="Search videos by title or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '15px',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#1E6B4C'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* Playlist Tabs */}
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ color: '#6b7280', fontSize: '13px', fontWeight: '600', marginBottom: '0.75rem', margin: '0 0 0.75rem 0', textTransform: 'uppercase' }}>
                Learning Paths
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['getting-started', 'advanced', 'case-studies'].map(key => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedPlaylist(key);
                      setFilterLevel('all');
                      setSearchQuery('');
                    }}
                    style={{
                      padding: '0.75rem 1.25rem',
                      background: selectedPlaylist === key ? 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)' : 'white',
                      color: selectedPlaylist === key ? 'white' : '#0B1F3A',
                      border: selectedPlaylist === key ? 'none' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '13px',
                      cursor: 'pointer',
                      textTransform: 'capitalize',
                      transition: 'all 0.2s ease',
                      boxShadow: selectedPlaylist === key ? '0 4px 12px rgba(30, 107, 76, 0.2)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedPlaylist !== key) {
                        e.currentTarget.style.borderColor = '#1E6B4C';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedPlaylist !== key) {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                      }
                    }}
                  >
                    {key.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            <div>
              <p style={{ color: '#6b7280', fontSize: '13px', fontWeight: '600', marginBottom: '0.75rem', margin: '0 0 0.75rem 0', textTransform: 'uppercase' }}>
                Difficulty Level
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['all', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
                  <button
                    key={level}
                    onClick={() => setFilterLevel(level as any)}
                    style={{
                      padding: '0.5rem 1rem',
                      background: filterLevel === level ? '#1E6B4C' : '#f9fafb',
                      color: filterLevel === level ? 'white' : '#6b7280',
                      border: `1px solid ${filterLevel === level ? '#1E6B4C' : '#e5e7eb'}`,
                      borderRadius: '6px',
                      fontWeight: '600',
                      fontSize: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {level === 'all' ? 'All Levels' : level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: '#0B1F3A', fontSize: '20px', fontWeight: '800', margin: '0 0 0.5rem 0' }}>
                {selectedPlaylist === 'getting-started' ? '🚀 Getting Started' : selectedPlaylist === 'advanced' ? '🎯 Advanced Topics' : '📖 Case Studies'}
              </h2>
              <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>
                {displayVideos.length} {displayVideos.length === 1 ? 'video' : 'videos'} available
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayVideos.map((video, idx) => (
                <div
                  key={video.id}
                  className="video-card"
                  style={{
                    background: 'white',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                    animationDelay: `${idx * 0.1}s`
                  }}
                  onClick={() => setSelectedVideo(video)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(30, 107, 76, 0.15)';
                    e.currentTarget.style.borderColor = '#1E6B4C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }}
                >
                  {/* Thumbnail */}
                  <div style={{
                    background: 'linear-gradient(135deg, #f0fdf4 0%, #e8f8f5 100%)',
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '56px',
                    position: 'relative',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    ▶️
                    <div style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      background: 'rgba(30, 107, 76, 0.9)',
                      color: 'white',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '700'
                    }}>
                      {video.duration}
                    </div>
                    {watchedVideos.includes(video.id) && (
                      <div style={{
                        position: 'absolute',
                        top: '0.75rem',
                        right: '0.75rem',
                        background: '#10b981',
                        color: 'white',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px'
                      }}>
                        ✓
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span style={{
                        background: video.level === 'Beginner' ? '#f0fdf4' : video.level === 'Intermediate' ? '#fef3c7' : '#fee2e2',
                        color: video.level === 'Beginner' ? '#166534' : video.level === 'Intermediate' ? '#92400e' : '#991b1b',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: '700'
                      }}>
                        {video.level}
                      </span>
                      <span style={{
                        color: '#9ca3af',
                        fontSize: '11px',
                        fontWeight: '600'
                      }}>
                        ⭐ {video.rating}
                      </span>
                    </div>
                    <h4 style={{
                      color: '#0B1F3A',
                      fontSize: '14px',
                      fontWeight: '800',
                      marginBottom: '0.5rem',
                      margin: '0 0 0.5rem 0',
                      lineHeight: '1.4'
                    }}>
                      {video.title}
                    </h4>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '12px',
                      margin: '0 0 0.75rem 0',
                      lineHeight: '1.4'
                    }}>
                      {video.desc}
                    </p>
                    <p style={{
                      color: '#1E6B4C',
                      fontSize: '12px',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      👨‍🏫 {video.instructor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructor Section */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: '#0B1F3A', fontSize: '24px', fontWeight: '800', marginBottom: '1.5rem', margin: '0 0 1.5rem 0' }}>
              👨‍🏫 Meet Your Instructors
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {instructors.map((instructor, i) => (
                <div key={i} style={{
                  background: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1E6B4C';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(30, 107, 76, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '1rem' }}>👤</div>
                  <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '14px', marginBottom: '0.25rem', margin: '0 0 0.25rem 0' }}>
                    {instructor.name}
                  </h4>
                  <p style={{ color: '#1E6B4C', fontSize: '12px', fontWeight: '600', marginBottom: '0.5rem', margin: '0 0 0.5rem 0' }}>
                    {instructor.role}
                  </p>
                  <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>
                    {instructor.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 20px 50px rgba(30, 107, 76, 0.3)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '1rem', margin: '0 0 1rem 0' }}>
              Ready to Master African Logistics?
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '2rem', margin: '0 0 2rem 0', lineHeight: '1.6' }}>
              Get started with our free learning materials, or schedule a live webinar with our expert instructors for your team.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/quote" style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: '#F5B041',
                color: '#0B1F3A',
                textDecoration: 'none',
                borderRadius: '10px',
                fontWeight: '800',
                fontSize: '15px',
                boxShadow: '0 8px 20px rgba(245, 176, 65, 0.4)',
                transition: 'all 0.3s ease',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                Start Learning Now
              </Link>
              <Link href="/contact" style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '10px',
                fontWeight: '800',
                fontSize: '15px',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}>
                Book a Webinar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
            backdropFilter: 'blur(4px)'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Video Player Area */}
            <div style={{
              background: '#000',
              height: '450px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '80px',
              position: 'relative'
            }}>
              ▶️
              <button
                onClick={() => {
                  markWatched(selectedVideo.id);
                  setSelectedVideo(null);
                }}
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  padding: '0.75rem 1.5rem',
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Mark as Watched
              </button>
            </div>

            {/* Video Details */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h2 style={{ color: '#0B1F3A', fontSize: '22px', fontWeight: '800', margin: 0 }}>
                  {selectedVideo.title}
                </h2>
                <button
                  onClick={() => setSelectedVideo(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '28px',
                    cursor: 'pointer',
                    color: '#6b7280'
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: selectedVideo.level === 'Beginner' ? '#f0fdf4' : selectedVideo.level === 'Intermediate' ? '#fef3c7' : '#fee2e2',
                  color: selectedVideo.level === 'Beginner' ? '#166534' : selectedVideo.level === 'Intermediate' ? '#92400e' : '#991b1b',
                  padding: '0.35rem 1rem',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '700'
                }}>
                  {selectedVideo.level}
                </span>
                <span style={{ color: '#6b7280', fontSize: '13px', fontWeight: '600' }}>
                  ⏱️ {selectedVideo.duration}
                </span>
                <span style={{ color: '#6b7280', fontSize: '13px', fontWeight: '600' }}>
                  ⭐ {selectedVideo.rating}/5
                </span>
              </div>

              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {selectedVideo.fullDesc || selectedVideo.desc}
              </p>

              <div style={{ paddingTop: '1.5rem', borderTop: '2px solid #e5e7eb' }}>
                <p style={{ color: '#6b7280', fontSize: '13px', fontWeight: '600', marginBottom: '0.75rem', margin: '0 0 0.75rem 0' }}>
                  Instructor
                </p>
                <p style={{ color: '#0B1F3A', fontSize: '15px', fontWeight: '700', margin: 0 }}>
                  👨‍🏫 {selectedVideo.instructor}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
