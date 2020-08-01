<template>
  <div class="app-footer">
    <div class="app-footer__inner">
      <div class="app-footer-left">
        <!--     <img    
            width="220"
            height="60"
            src="{{asset('imagenes/logo_vertical_ingsistemas.png')}}"
            alt="Logo ufps"
        />-->
        <div class="mt-3 ml-2">
          <p>
            SisWebMajumba UFPS © 2020. Version
            <b>1.0</b>
          </p>
        </div>
        <!-- se tuvo que dejar para que sirvierla el scroll del siderbar-->
        <div class="footer-dots">
          <div class="dropdown">
            <div
              tabindex="-1"
              role="menu"
              aria-hidden="false"
              class="dropdown-menu-xl rm-pointers dropdown-menu"
              style="display: none"
            >
              <div class="tab-content">
                <div class="tab-pane active" id="tab-messages-header1" role="tabpanel">
                  <div class="scroll-area-sm">
                    <div class="scrollbar-container">
                      <div class="p-3">
                        <div class="notifications-box">
                          <div
                            class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--one-column"
                          >
                            <div
                              class="vertical-timeline-item dot-danger vertical-timeline-element"
                            >
                              <div>
                                <span class="vertical-timeline-element-icon bounce-in"></span>
                                <div class="vertical-timeline-element-content bounce-in">
                                  <h4 class="timeline-title">All Hands Meeting</h4>
                                  <span class="vertical-timeline-element-date"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="vertical-timeline-item dot-warning vertical-timeline-element"
                            >
                              <div>
                                <span class="vertical-timeline-element-icon bounce-in"></span>
                                <div class="vertical-timeline-element-content bounce-in">
                                  <p>
                                    Yet another one, at
                                    <span class="text-success">15:00 PM</span>
                                  </p>
                                  <span class="vertical-timeline-element-date"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="vertical-timeline-item dot-success vertical-timeline-element"
                            >
                              <div>
                                <span class="vertical-timeline-element-icon bounce-in"></span>
                                <div class="vertical-timeline-element-content bounce-in">
                                  <h4 class="timeline-title">
                                    Build the production release
                                    <span
                                      class="badge badge-danger ml-2"
                                    >NEW</span>
                                  </h4>
                                  <span class="vertical-timeline-element-date"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="vertical-timeline-item dot-primary vertical-timeline-element"
                            >
                              <div>
                                <span class="vertical-timeline-element-icon bounce-in"></span>
                                <div class="vertical-timeline-element-content bounce-in">
                                  <h4 class="timeline-title">
                                    Something not important
                                    <div class="avatar-wrapper mt-2 avatar-wrapper-overlap">
                                      <div class="avatar-icon-wrapper avatar-icon-sm">
                                        <div class="avatar-icon">
                                          <img src alt />
                                        </div>
                                      </div>
                                      <div class="avatar-icon-wrapper avatar-icon-sm">
                                        <div class="avatar-icon">
                                          <img src alt />
                                        </div>
                                      </div>
                                      <div class="avatar-icon-wrapper avatar-icon-sm">
                                        <div class="avatar-icon">
                                          <img src alt />
                                        </div>
                                      </div>
                                      <div class="avatar-icon-wrapper avatar-icon-sm">
                                        <div class="avatar-icon">
                                          <img src alt />
                                        </div>
                                      </div>
                                      <div class="avatar-icon-wrapper avatar-icon-sm">
                                        <div class="avatar-icon">
                                          <img src alt />
                                        </div>
                                      </div>
                                      <div class="avatar-icon-wrapper avatar-icon-sm">
                                        <div class="avatar-icon">
                                          <img src alt />
                                        </div>
                                      </div>
                                      <div class="avatar-icon-wrapper avatar-icon-sm">
                                        <div class="avatar-icon">
                                          <img src alt />
                                        </div>
                                      </div>
                                      <div class="avatar-icon-wrapper avatar-icon-sm">
                                        <div class="avatar-icon">
                                          <img src alt />
                                        </div>
                                      </div>
                                      <div
                                        class="avatar-icon-wrapper avatar-icon-sm avatar-icon-add"
                                      >
                                        <div class="avatar-icon">
                                          <i>+</i>
                                        </div>
                                      </div>
                                    </div>
                                  </h4>
                                  <span class="vertical-timeline-element-date"></span>
                                </div>
                              </div>
                            </div>
                            <div class="vertical-timeline-item dot-info vertical-timeline-element">
                              <div>
                                <span class="vertical-timeline-element-icon bounce-in"></span>
                                <div class="vertical-timeline-element-content bounce-in">
                                  <h4 class="timeline-title">This dot has an info state</h4>
                                  <span class="vertical-timeline-element-date"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="vertical-timeline-item dot-danger vertical-timeline-element"
                            >
                              <div>
                                <span class="vertical-timeline-element-icon bounce-in"></span>
                                <div class="vertical-timeline-element-content bounce-in">
                                  <h4 class="timeline-title">All Hands Meeting</h4>
                                  <span class="vertical-timeline-element-date"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="vertical-timeline-item dot-warning vertical-timeline-element"
                            >
                              <div>
                                <span class="vertical-timeline-element-icon bounce-in"></span>
                                <div class="vertical-timeline-element-content bounce-in">
                                  <p>
                                    Yet another one, at
                                    <span class="text-success">15:00 PM</span>
                                  </p>
                                  <span class="vertical-timeline-element-date"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="vertical-timeline-item dot-success vertical-timeline-element"
                            >
                              <div>
                                <span class="vertical-timeline-element-icon bounce-in"></span>
                                <div class="vertical-timeline-element-content bounce-in">
                                  <h4 class="timeline-title">
                                    Build the production release
                                    <span
                                      class="badge badge-danger ml-2"
                                    >NEW</span>
                                  </h4>
                                  <span class="vertical-timeline-element-date"></span>
                                </div>
                              </div>
                            </div>
                            <div class="vertical-timeline-item dot-dark vertical-timeline-element">
                              <div>
                                <span class="vertical-timeline-element-icon bounce-in"></span>
                                <div class="vertical-timeline-element-content bounce-in">
                                  <h4 class="timeline-title">This dot has a dark state</h4>
                                  <span class="vertical-timeline-element-date"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-events-header1" role="tabpanel">
                  <div class="scroll-area-sm">
                    <div class="scrollbar-container">
                      <div class="p-3">
                        <div
                          class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column"
                        >
                          <div class="vertical-timeline-item vertical-timeline-element">
                            <div>
                              <span class="vertical-timeline-element-icon bounce-in">
                                <i class="badge badge-dot badge-dot-xl badge-success"></i>
                              </span>
                              <div class="vertical-timeline-element-content bounce-in">
                                <h4 class="timeline-title">All Hands Meeting</h4>
                                <p>
                                  Lorem ipsum dolor sic amet, today at
                                  <a
                                    href="javascript:void(0);"
                                  >12:00 PM</a>
                                </p>
                                <span class="vertical-timeline-element-date"></span>
                              </div>
                            </div>
                          </div>
                          <div class="vertical-timeline-item vertical-timeline-element">
                            <div>
                              <span class="vertical-timeline-element-icon bounce-in">
                                <i class="badge badge-dot badge-dot-xl badge-warning"></i>
                              </span>
                              <div class="vertical-timeline-element-content bounce-in">
                                <p>
                                  Another meeting today, at
                                  <b class="text-danger">12:00 PM</b>
                                </p>
                                <p>
                                  Yet another one, at
                                  <span class="text-success">15:00 PM</span>
                                </p>
                                <span class="vertical-timeline-element-date"></span>
                              </div>
                            </div>
                          </div>
                          <div class="vertical-timeline-item vertical-timeline-element">
                            <div>
                              <span class="vertical-timeline-element-icon bounce-in">
                                <i class="badge badge-dot badge-dot-xl badge-danger"></i>
                              </span>
                              <div class="vertical-timeline-element-content bounce-in">
                                <h4 class="timeline-title">Build the production release</h4>
                                <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p>
                                <span class="vertical-timeline-element-date"></span>
                              </div>
                            </div>
                          </div>
                          <div class="vertical-timeline-item vertical-timeline-element">
                            <div>
                              <span class="vertical-timeline-element-icon bounce-in">
                                <i class="badge badge-dot badge-dot-xl badge-primary"></i>
                              </span>
                              <div class="vertical-timeline-element-content bounce-in">
                                <h4 class="timeline-title text-success">Something not important</h4>
                                <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p>
                                <span class="vertical-timeline-element-date"></span>
                              </div>
                            </div>
                          </div>
                          <div class="vertical-timeline-item vertical-timeline-element">
                            <div>
                              <span class="vertical-timeline-element-icon bounce-in">
                                <i class="badge badge-dot badge-dot-xl badge-success"></i>
                              </span>
                              <div class="vertical-timeline-element-content bounce-in">
                                <h4 class="timeline-title">All Hands Meeting</h4>
                                <p>
                                  Lorem ipsum dolor sic amet, today at
                                  <a
                                    href="javascript:void(0);"
                                  >12:00 PM</a>
                                </p>
                                <span class="vertical-timeline-element-date"></span>
                              </div>
                            </div>
                          </div>
                          <div class="vertical-timeline-item vertical-timeline-element">
                            <div>
                              <span class="vertical-timeline-element-icon bounce-in">
                                <i class="badge badge-dot badge-dot-xl badge-warning"></i>
                              </span>
                              <div class="vertical-timeline-element-content bounce-in">
                                <p>
                                  Another meeting today, at
                                  <b class="text-danger">12:00 PM</b>
                                </p>
                                <p>
                                  Yet another one, at
                                  <span class="text-success">15:00 PM</span>
                                </p>
                                <span class="vertical-timeline-element-date"></span>
                              </div>
                            </div>
                          </div>
                          <div class="vertical-timeline-item vertical-timeline-element">
                            <div>
                              <span class="vertical-timeline-element-icon bounce-in">
                                <i class="badge badge-dot badge-dot-xl badge-danger"></i>
                              </span>
                              <div class="vertical-timeline-element-content bounce-in">
                                <h4 class="timeline-title">Build the production release</h4>
                                <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p>
                                <span class="vertical-timeline-element-date"></span>
                              </div>
                            </div>
                          </div>
                          <div class="vertical-timeline-item vertical-timeline-element">
                            <div>
                              <span class="vertical-timeline-element-icon bounce-in">
                                <i class="badge badge-dot badge-dot-xl badge-primary"></i>
                              </span>
                              <div class="vertical-timeline-element-content bounce-in">
                                <h4 class="timeline-title text-success">Something not important</h4>
                                <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p>
                                <span class="vertical-timeline-element-date"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-errors-header1" role="tabpanel">
                  <div class="scroll-area-sm">
                    <div class="scrollbar-container">
                      <div class="no-results pt-3 pb-0">
                        <div class="swal2-icon swal2-success swal2-animate-success-icon">
                          <div
                            class="swal2-success-circular-line-left"
                            style="background-color: rgb(255, 255, 255);"
                          ></div>
                          <span class="swal2-success-line-tip"></span>
                          <span class="swal2-success-line-long"></span>
                          <div class="swal2-success-ring"></div>
                          <div
                            class="swal2-success-fix"
                            style="background-color: rgb(255, 255, 255);"
                          ></div>
                          <div
                            class="swal2-success-circular-line-right"
                            style="background-color: rgb(255, 255, 255);"
                          ></div>
                        </div>
                        <div class="results-subtitle">All caught up!</div>
                        <div class="results-title">There are no system errors!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="app-footer-right">
        <img
          width="220"
          height="60"
          src="data:image/png;base64,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"
          alt="Logo ufps"
        />
      </div>
    </div>
  </div>
</template>